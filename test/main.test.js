const expect = require("chai").expect;
const generate = require("../main");

describe("Generate possible banlanced paranthesis", function () {
  describe("should return UNDEFINED_IP when no parameter is passed", function () {
    it("should return 'UNDEFINED_IP' when the value is not present", function () {
      const actual = generate();
      const expected = "UNDEFINED_IP";
      expect(actual).to.equal(expected);
    });

    it("should return 'INVALID_IP' when the value is not present", function () {
      const actual = generate("???");
      const expected = "INVALID_IP";
      expect(actual).to.equal(expected);
    });

    it("should return valid one balanced paren set", function () {
      const actual = generate("??");
      expect(actual).to.have.lengthOf(1);
      expect(actual).to.be.an("array").that.include("()");
    });

    it("should return valid 2 balanced parens set", function () {
      const actual = generate("????");
      expect(actual).to.have.lengthOf(2);
      expect(actual).to.be.an("array").that.include("()()");
      expect(actual).to.be.an("array").that.include("(())");
    });
  });
});
