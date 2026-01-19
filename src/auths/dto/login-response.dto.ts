export class LoginResponseDto {
    success: boolean;
    message: string;
    user?: {
        id: string;
        name: string;
        email: string;
        phone: string;
        country: string;
        city: string;
    };
    token?: string;

    constructor(partial: Partial<LoginResponseDto>) {
        Object.assign(this, partial);
    }
}