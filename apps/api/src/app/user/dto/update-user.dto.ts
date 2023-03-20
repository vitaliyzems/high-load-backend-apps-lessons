import { IsOptional, IsString } from 'class-validator';

// export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  newPassword: string;
}
