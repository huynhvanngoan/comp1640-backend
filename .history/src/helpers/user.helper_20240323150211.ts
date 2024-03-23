import { User } from "src/user/entities/user.entity";

export class UserHelper {
  static generateUserPayload(user: User) {
    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      avatar: user.avatar,
      role: user.role,
      facultyId: user.faculty.map(faculty => f)
    };

    return payload;
  }
}
