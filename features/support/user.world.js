"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const cucumber_1 = require("@cucumber/cucumber");
exports.users = new Array();
class UserRepositoryTest {
    async create(user) {
        exports.users.push(user);
        //console.log("repo:", user);
    }
    async get(id) {
        const user = exports.users.find((u) => u.id === id);
        if (!user) {
            return null;
        }
        return user;
    }
}
class BddWorld {
    constructor() {
        this.userRepository = new UserRepositoryTest();
        this.id = "";
    }
}
(0, cucumber_1.setWorldConstructor)(BddWorld);
