import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { User } from "../../src/core/user";

Given("Api it's working", function () {
  // Write code here that turns the phrase above into concrete actions
});

When("Input the following json", async function (doc: string) {
  const model = JSON.parse(doc);

  const user = User.of({
    name: model.name,
    email: model.email,
    passwordHash: model.password,
  });
  this.id = user.id;
  await this.userRepository.create(user);
});

Then("the response is", async function (doc: string) {
  const model = JSON.parse(doc);
  const user = await this.userRepository.get(this.id);
  expect(model.name).to.be.equal(user.name);
});
