"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const chai_1 = require("chai");
const user_1 = require("../../src/core/user");
(0, cucumber_1.Given)("Api it's working", function () {
    // Write code here that turns the phrase above into concrete actions
});
(0, cucumber_1.When)("Input the following json", function (doc) {
    const model = JSON.parse(doc);
    const user = user_1.User.of({
        name: model.name,
        email: model.email,
        passwordHash: model.password,
    });
    this.id = user.id;
    this.userRepository.create(user);
});
(0, cucumber_1.Then)("the response is", async function (doc) {
    const model = JSON.parse(doc);
    const user = await this.userRepository.get(this.id);
    (0, chai_1.expect)(model.name).to.be.equal(user.name);
});
