import { setWorldConstructor } from "@cucumber/cucumber";
import { Builder } from "selenium-webdriver";

class BddWorld {
  chromeDriver: any;
  name: string;
  ci: number;
  constructor() {
    this.chromeDriver = null;
    this.name = "";
    this.ci = 0;
  }

  async openChrome(url) {
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
