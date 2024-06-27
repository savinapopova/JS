import {isOddOrEven} from "./02.EvenOrOdd.js";
import {expect} from "chai";

describe('Even or Odd Tests', function () {
    it('should return even', function () {
        expect(isOddOrEven("baby")).to.equal("even");
        expect(isOddOrEven("studio")).to.equal("even");
        expect(isOddOrEven("creation")).to.equal("even");
    });
    it('should return even with empty string', function () {
        expect(isOddOrEven("")).to.equal("even");
    });
    it('should return odd', function () {
        expect(isOddOrEven("bye")).to.equal("odd");
        expect(isOddOrEven("grocery")).to.equal("odd");
        expect(isOddOrEven("merci")).to.equal("odd");
    });
    it('should return undefined without parameters', function () {
        expect(isOddOrEven()).to.be.undefined;
    });
    it('should return undefined with not string parameters', function () {
        expect(isOddOrEven(2)).to.be.undefined;
        expect(isOddOrEven(NaN)).to.be.undefined;
        expect(isOddOrEven(null)).to.be.undefined;
        expect(isOddOrEven(undefined)).to.be.undefined;
        expect(isOddOrEven(['hello'])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
    });
});
