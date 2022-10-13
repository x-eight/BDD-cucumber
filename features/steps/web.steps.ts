import { Given, When, Then } from "@cucumber/cucumber";
import { By } from "selenium-webdriver";
import { expect } from "chai";

Given("User enters the dashboard", async function () {
  await this.openChrome("http://127.0.0.1:3000");
});

When("Enter name {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await this.chromeDriver.findElement(By.id("nameId")).sendKeys(string);
});

When("Enter DNI {int}", async function (int) {
  await this.chromeDriver.findElement(By.id("dniId")).sendKeys(int);
});

When("Send the data", async function () {
  await this.chromeDriver.findElement(By.id("buttonId")).click();
});

Then("He should receive the code {string}", async function (string) {
  let code = "";
  await this.chromeDriver
    .findElement(By.id("resultId"))
    .getText()
    .then(function (text) {
      code = text;
    });

  expect(code).to.eql(string);
  //this.closeChrome();
});
