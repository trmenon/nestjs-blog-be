import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    description: 'First Name',
    example: 'Allison',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  first_name: string;

  @ApiProperty({
    description: 'Last Name',
    example: 'Taylor',
  })
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  last_name?: string;

  @ApiProperty({
    description: 'Email',
    example: 'allison.taylor@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(96)
  email: string;

  @ApiProperty({
    description: 'Password',
    example: 'Password@123',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(96)
  @Matches(/^[A-Za-z](?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[A-Za-z]).*$/, {
    message:
      'Password must start with an alphabet and contain atleast 1 special character and 1 numerical value',
  })
  password: string;
}
