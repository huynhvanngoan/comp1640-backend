import { User } from "src/user/entities/user.entity";

export class UserHelper {
  static generateUserPayload(user: User) {
    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      ava
      role: user.role,
    };

    return payload;
  }
}
