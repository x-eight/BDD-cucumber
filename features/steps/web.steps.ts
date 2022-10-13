import { Given, When, Then } from "@cucumber/cucumber";
import { By } from "selenium-webdriver";
import { expect } from "chai";

Given("User enters the dashboard", async function () {
  await this.openChrome("http://127.0.0.1:3000");
});

When("Enter name {string}", async function (name: string) {
  await this.chromeDriver.findElement(By.id("nameId")).sendKeys(name);
});

When("Enter DNI {int}", async function (dni: number) {
  await this.chromeDriver.findElement(By.id("dniId")).sendKeys(dni);
});

When("Send the data", async function () {
  await this.chromeDriver.findElement(By.id("buttonId")).click();
});

Then("He should receive the code {string}", async function (codeId: string) {
  const code = await this.chromeDriver.findElement(By.id("resultId")).getText();
  expect(code).to.eql(codeId);

  this.closeChrome();
});
