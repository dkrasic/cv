import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<Partial<User>> {
    const user = await this.usersService.findOne(email);
    console.log('[AuthService] user: ', user);

    if (user?.password !== pass) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user._id, email: user.email };

    return {
      name: user.name,
      email: user.email,
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
