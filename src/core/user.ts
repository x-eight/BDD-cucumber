import { generatId } from "./id";
//import bcrypt from "bcrypt";
import * as bcrypt from "bcrypt";

export class User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;

  static of(body: Partial<User>): User {
    const user = new User();
    Object.assign(user, {
      //defaults
      id: generatId("user"),
      ...body,
    });
    return user;
  }

  static async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.passwordHash);
  }
}

export interface UserRepository {
  create(user: User): Promise<void>;
  get(id: string): Promise<User | null>;
}
