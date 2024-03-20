import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const request = context.switchToHttp().getRequest();

    try {
      //get token from header
      const token = request.headers.authorization?.split(' ')[1] ?? [];

      if (!token) throw new ForbiddenException('Please provide access token');

      //jwt verify validate token
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      // find user in database base on jwt verify
      const user = await this.userService.findByEmail(payload.email);

      if (!user)
        throw new ForbiddenException(
          'User not belong to token, please try again.',
        );

      //assign user to request object
      request.currentUser = user;
    } catch (error) {
      throw new ForbiddenException('Invalid token or expired');
    }
    return true;
  }
}
