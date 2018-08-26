const CoolClass = require("../");

const assert = require("assert");

describe("A test", function() {
  it("should pass", function() {
    const myInstance = new CoolClass(4);
    assert.equal(4, myInstance.value);
  });
  it("should not overwrite values", function() {
    const oneInstance = new CoolClass(4);
    const anotherInstance = new CoolClass(5);
    assert.notEqual(oneInstance.value, anotherInstance.value);
  });
});
