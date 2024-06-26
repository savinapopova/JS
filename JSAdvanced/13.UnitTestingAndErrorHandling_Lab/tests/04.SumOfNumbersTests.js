import {sum} from "./04.SumOfNumbers.js";
import {expect} from "chai";

describe("sum", function() {
    it('should return 3', function () {
        expect(sum([1, 2])).to.equal(3);
    });
    it('should return 1', function () {
        expect(sum([1])).to.equal(1);
    });
    it('should return 0', function () {
        expect(sum([])).to.equal(0);
    });
    it('should return NaN', function () {
        expect(sum(['hello', 'hi'])).to.be.NaN;
    });

});


