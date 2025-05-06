import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '@users/users.service';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          console.log('Refresh Token Strategy req.headers', req.headers);
          const authHeader = req.headers['authorization'];
          console.log('Refresh Token Strategy authHeader', authHeader);
          if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
          return authHeader.split(' ')[1];
        },
      ]), // Bearer Token olarak al
      secretOrKey: configService.get('JWT_REFRESH_SECRET'),
      passReqToCallback: true, // Request objesini callback'e iletecek mi?
    });
  }

  async validate(req: Request, payload: any) {
    const user = await this.usersService.findOne(payload.sub);
    const refreshToken = req.headers['authorization']?.split(' ')[1];
    if (!user || user.refreshToken !== refreshToken) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
