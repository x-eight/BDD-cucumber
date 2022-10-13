import { setWorldConstructor } from "@cucumber/cucumber";
import { User, UserRepository } from "../../src/core/user";
import { Builder } from "selenium-webdriver";

export let users = new Array<User>();

class UserRepositoryTest implements UserRepository {
  async create(user: User): Promise<void> {
    users.push(user);
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
  chromeDriver: any;

  constructor() {
    this.userRepository = new UserRepositoryTest();
    this.id = "";
    this.chromeDriver = null;
  }

  async openChrome(url: string) {
    if (!this.chromeDriver) {
      this.chromeDriver = await new Builder().forBrowser("chrome").build();
    }
    await this.chromeDriver.get(url);
  }

  async closeChrome() {
    if (this.chromeDriver) {
      await this.chromeDriver.quit();
    }
  }
}

setWorldConstructor(BddWorld);
