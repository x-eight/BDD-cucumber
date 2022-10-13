import { setWorldConstructor } from "@cucumber/cucumber";
import { User, UserRepository } from "../../src/core/user";

export let users = new Array<User>();

class UserRepositoryTest implements UserRepository {
  async create(user: User): Promise<void> {
    users.push(user);
    //console.log("repo:", user);
  }
  async get(id: string): Promise<User | null> {
    const user = users.find((u) => u.id === id);
    if (!user) {
      return null;
    }
    return user;
  }
}

class BddWorld {
  userRepository: UserRepositoryTest;
  id: string;

  constructor() {
    this.userRepository = new UserRepositoryTest();
    this.id = "";
  }
}

setWorldConstructor(BddWorld);
