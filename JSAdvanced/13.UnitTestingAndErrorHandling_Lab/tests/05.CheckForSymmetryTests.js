import {isSymmetric} from "./05.CheckForSymmetry.js";
import {expect} from "chai";

describe('Check for Symmetry Tests', function () {
    it('should return false if not array', function () {
        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric('hello')).to.be.false;
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric(true)).to.be.false;
        expect(isSymmetric(false)).to.be.false;
        expect(isSymmetric(NaN)).to.be.false;
        expect(isSymmetric(1,5,1)).to.be.false;
        expect(isSymmetric('')).to.be.false;
    });
    it('should return true if symmetric', function () {
        expect(isSymmetric([1, 3, 1])).to.be.true;
    });
    it('should return false if not symmetric', function () {
        expect(isSymmetric([1, 3 ,5])).to.be.false;
        expect(isSymmetric([1, 3, '1'])).to.be.false;
    });
    it('should return true when array is empty', function () {
        expect(isSymmetric([])).to.be.true;
    });
    it('should return true with one element array', function () {
        expect(isSymmetric([1])).to.be.true;
    });
    it('should return true with symmetric string elements', function () {
        expect(isSymmetric(['hello', 'hi', 'hello'])).to.be.true;
    });
    it('should return false with not symmetric string elements', function () {
        expect(isSymmetric(['hello', 'hi', 'bye'])).to.be.false;
    });
    it('should return false with no arguments', function () {
        expect(isSymmetric()).to.be.false;
    });
    it('should return false with non-array argument', function () {
        expect(isSymmetric('hello')).to.be.false;
    });
    it('should return true with symmetric mixed elements', function () {
        expect(isSymmetric(['hello', 1, 'hello'])).to.be.true;
    });


});
