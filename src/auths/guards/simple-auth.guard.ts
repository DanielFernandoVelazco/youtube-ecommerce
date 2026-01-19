import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthsService } from '../auths.service';

@Injectable()
export class SimpleAuthGuard implements CanActivate {
    constructor(private authService: AuthsService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            throw new UnauthorizedException('No token provided');
        }

        const token = authHeader.replace('Bearer ', '');
        const validation = await this.authService.validateToken(token);

        if (!validation) {
            throw new UnauthorizedException('Invalid token');
        }

        // Añadir usuario al request
        request.user = validation;
        return true;
    }
}