import { before, describe, it } from "node:test";
import assert from "node:assert";
import isPalindrome from "./palindrome.js";

describe("palindrome", () => {
  let sut = null;
  before(() => {
    sut = isPalindrome;
  });

  it("should return ? if length < 3", () => {
    const useCases = ["a", "ab", "aba"];
    useCases.forEach((data) => {
      assert.equal(sut(data), "?");
    });
  });

  it("should return N if palindrome is not valid", () => {
    const useCases = ["ABAA", "ASDF", "ABBAA"];
    useCases.forEach((data) => {
      assert.equal(sut(data), "N");
    });
  });

  it("should return S if palindrome is valid", () => {
    const useCases = ["ABBA", "aabaa", "cabac"];
    useCases.forEach((data) => {
      assert.equal(sut(data), "S");
    });
  });
});
