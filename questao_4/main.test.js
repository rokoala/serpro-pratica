import { describe, it } from "node:test";
import assert from "node:assert";
import { XPTO } from "./main.js";

describe("XPTO", () => {
  it("should return the correct position", () => {
    assert.equal(XPTO(11, [2, 1, 3, 4, 7, 8, 10, 12])[0], -1);
    assert.equal(XPTO(13, [1, 2, 3, 5, 8, 13, 21])[0], 5);
  });
});
