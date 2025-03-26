import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  first_name: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(100)
  last_name?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^[A-Za-z](?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[A-Za-z]).*$/, {
    message:
      'Password must start with an alphabet and contain atleast 1 special character and 1 numerical value',
  })
  password: string;
}
