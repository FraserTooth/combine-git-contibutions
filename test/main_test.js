const contributions = require("../src/combineGitContributions");
const expect = require("chai").expect;

describe("Library Test", function () {
  this.timeout(5000);
  context("with no Arguments", () => {
    it("should return undefined", () => {
      contributions().then((result) => {
        expect(result).to.equal(undefined);
      });
    });
  });

  context("with array arguments", () => {
    context("empty array", () => {
      it("should return an empty array", () => {
        contributions([]).then((result) => {
          expect(result).to.deep.equal([]);
        });
      });
    });
    context("using one github link", () => {
      const testURL = "https://www.github.com/FraserTooth";

      it("should return an array of contributions data", (done) => {
        const output = contributions([testURL]);
        output.then((output) => {
          expect(output[0].length).to.be.greaterThan(1);
          done();
        });
      });
    });
  });

  context("with non array arguments", () => {});
});
