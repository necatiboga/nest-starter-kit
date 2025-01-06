import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  /* 
  / PartialType, CreateUserDto'daki tüm alanları otomatik olarak
  / opsiyonel hale getirir ve ApiProperty dekoratörlerini korur.
  / Bu nedenle tekrar tanımlamaya gerek yok. 
  */
}
