const contributions = require("../src/combineGitContributions");
const expect = require("chai").expect;

describe("Library Test", () => {
  context("with no Arguments", () => {
    it("should return undefined", () => {
      expect(contributions()).to.equal(undefined);
    });
  });

  context("with array arguments", () => {
    context("[]", () => {
      it("should return an empty array", () => {
        expect(contributions([])).to.deep.equal([]);
      });
    });
  });

  context("with non array arguments", () => {});
});
