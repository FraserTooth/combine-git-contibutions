const contributions = require("../src/combineGitContributions");
const expect = require("chai").expect;

const testURL1 = "https://www.github.com/FraserTooth";
const testURL2 = "https://www.github.com/mt-ftooth";

describe("Library Test", function () {
  this.timeout(10000);
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
      it("should return an array of arrays of contributions data", (done) => {
        const output = contributions([testURL1]);
        output.then((output) => {
          expect(output[0].length).to.be.greaterThan(1);
          expect(output.length).to.equal(1);
          done();
        });
      });
    });
    context("using two github links", () => {
      it("should return an array of arrays of contributions data", (done) => {
        const output = contributions([testURL1, testURL2]);
        output.then((output) => {
          expect(output[0].length).to.be.greaterThan(1);
          expect(output[1].length).to.be.greaterThan(1);
          expect(output.length).to.equal(2);
          done();
        });
      });
    });
  });

  context("with non array arguments", () => {
    context("using one github link", () => {
      it("should return an array of contributions data", (done) => {
        const output = contributions(testURL1);
        output.then((output) => {
          expect(output.length).to.be.greaterThan(1);
          done();
        });
      });
    });
  });
});
