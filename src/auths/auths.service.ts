import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UsersService } from '../users/users.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthsService {
  constructor(private readonly usersService: UsersService) { }

  async login(createAuthDto: CreateAuthDto): Promise<LoginResponseDto> {
    const { email, password } = createAuthDto;

    const user = await this.usersService.findByEmailWithPassword(email);

    if (!user) {
      return new LoginResponseDto({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    if (user.password !== password) {
      return new LoginResponseDto({
        success: false,
        message: 'Contraseña incorrecta'
      });
    }

    // Remover password de la respuesta por seguridad
    const { password: _, ...userWithoutPassword } = user;

    // Generar token simple
    const token = this.generateSimpleToken(user.id);

    return new LoginResponseDto({
      success: true,
      message: 'Login exitoso',
      user: userWithoutPassword,
      token
    });
  }

  private generateSimpleToken(userId: string): string {
    return `simple_${userId}_${Date.now()}`;
  }

  async validateToken(token: string): Promise<any> {
    if (!token || !token.startsWith('simple_')) {
      return null;
    }
    return { valid: true, token };
  }

  // Métodos del CRUD básico 
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auths`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}