import { mock, describe, before, after, it } from "node:test";
import assert from "node:assert/strict";
import UserRepository from "./UserRepository.js";

describe("UserRepository", () => {
  let userRepository = null;
  before(() => {
    let db = {
      all: () => {},
    };
    mock.method(db, "all", (query, cb) => {
      console.log(query);
      cb(null, []);
    });
    userRepository = new UserRepository(db);
  });
  after(() => {
    console.log("after");
  });
  describe("getUsers", () => {
    it("should return empty array", async () => {
      const users = await userRepository.getUsers();
      assert.equal(users.length, 0);
    });
    it("should return empty array", async () => {
      const users = await userRepository.getUsers();
      assert.equal(users.length, 0);
    });
  });
});
