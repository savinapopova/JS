import {mathEnforcer} from "./04.MathEnforcer.js";
import {expect} from "chai";

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return undefined without parameter', function () {
            expect(mathEnforcer.addFive()).to.be.undefined;
        });
        it('should return undefined with non number parameter', function () {
            expect(mathEnforcer.addFive('2')).to.be.undefined;
            expect(mathEnforcer.addFive('hi')).to.be.undefined;
            expect(mathEnforcer.addFive([2])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
            expect(mathEnforcer.addFive(null)).to.be.undefined;
        });
        it('should return NaN with NaN parameter', function () {
            expect(mathEnforcer.addFive(NaN)).to.be.NaN;
        });
        it('should return correct value', function () {
            expect(mathEnforcer.addFive(2)).to.equal(7);
            expect(mathEnforcer.addFive(-2)).to.equal(3);
            expect(mathEnforcer.addFive(-7)).to.equal(-2);
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        });
    });
    describe('subtractTen', function () {
        it('should return undefined without parameter', function () {
            expect(mathEnforcer.subtractTen()).to.be.undefined;
        });
        it('should return undefined with non number parameter', function () {
            expect(mathEnforcer.subtractTen('12')).to.be.undefined;
            expect(mathEnforcer.subtractTen('hi')).to.be.undefined;
            expect(mathEnforcer.subtractTen([2])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
        });
        it('should return NaN with NaN parameter', function () {
            expect(mathEnforcer.subtractTen(NaN)).to.be.NaN;
        });
        it('should return correct value', function () {
            expect(mathEnforcer.subtractTen(12)).to.equal(2);
            expect(mathEnforcer.subtractTen(-12)).to.equal(-22);
            expect(mathEnforcer.subtractTen(3)).to.equal(-7);
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(12.5)).to.equal(2.5);
        });
    });
    describe('sum', function () {
        it('should return undefined without parameter', function () {
            expect(mathEnforcer.sum()).to.be.undefined;
        });
        it('should return undefined with one parameter', function () {
            expect(mathEnforcer.sum(2)).to.be.undefined;
        });
        it('should return undefined with one number parameter', function () {
            expect(mathEnforcer.sum('12', 2)).to.be.undefined;
            expect(mathEnforcer.sum('hi', 2)).to.be.undefined;
            expect(mathEnforcer.sum([2], 2)).to.be.undefined;
            expect(mathEnforcer.sum({}, 2)).to.be.undefined;
            expect(mathEnforcer.sum(undefined, 2)).to.be.undefined;
            expect(mathEnforcer.sum(null, 2)).to.be.undefined;
            expect(mathEnforcer.sum(2,'12')).to.be.undefined;
            expect(mathEnforcer.sum(2, 'hi')).to.be.undefined;
            expect(mathEnforcer.sum(2,[2])).to.be.undefined;
            expect(mathEnforcer.sum(2,{})).to.be.undefined;
            expect(mathEnforcer.sum(2,undefined)).to.be.undefined;
            expect(mathEnforcer.sum(2,null)).to.be.undefined;
        });
        it('should return NaN with NaN parameters', function () {
            expect(mathEnforcer.sum(NaN, 5)).to.be.NaN;
            expect(mathEnforcer.sum( 5, NaN)).to.be.NaN;
            expect(mathEnforcer.sum( NaN, NaN)).to.be.NaN;
        });
        it('should return correct value', function () {
            expect(mathEnforcer.sum(12, 25)).to.equal(37);
            expect(mathEnforcer.sum(-12, -25)).to.equal(-37);
            expect(mathEnforcer.sum(-12, 5)).to.equal(-7);
            expect(mathEnforcer.sum(12, -5)).to.equal(7);
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
            expect(mathEnforcer.sum(0, 5)).to.equal(5);
            expect(mathEnforcer.sum(5, 0)).to.equal(5);
            expect(mathEnforcer.sum(1.5, 1.7)).to.equal(3.2);
            expect(mathEnforcer.sum(1.5, 1)).to.equal(2.5);
            expect(mathEnforcer.sum(-1, 1.5)).to.equal(0.5);
        });
    });
});
