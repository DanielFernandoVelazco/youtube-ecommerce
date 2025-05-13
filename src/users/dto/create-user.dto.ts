import { IsEmail, IsString, Matches } from "class-validator"

export class CreateUserDto {
    @IsString()
    name: string

    @IsEmail()
    email: string

    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        {
            message: 'The password must have a Uppercase, lowercase letter and a number'
        }
    )
    password: string

    @IsString()
    phone: string

    @IsString()
    country: string

    @IsString()
    city: string
}