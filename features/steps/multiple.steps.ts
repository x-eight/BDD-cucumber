import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { User } from "../../src/core/user";

Given("Api to create it's working", function () {
  // Write code here that turns the phrase above into concrete actions
});

When(
  "Input the following json \\{name: {string},email: {string},password: {string}}",
  async function (name: string, email: string, password: string) {
    const user = User.of({
      name: name,
      email: email,
      passwordHash: password,
    });

    this.id = user.id;
    await this.userRepository.create(user);
  }
);

Then(
  "the response is \\{name: {string},email: {string},password: {string}}",
  async function (name: string, email: string, password: string) {
    const user = await this.userRepository.get(this.id);
    expect(name).to.be.equal(user.name);
  }
);
