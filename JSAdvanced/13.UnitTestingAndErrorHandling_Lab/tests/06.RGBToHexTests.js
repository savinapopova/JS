import {rgbToHexColor} from "./06.RGBToHex.js";
import {expect} from "chai";

describe('RGBToHexTests', function () {
    it('should return with valid data', function () {
        expect(rgbToHexColor(5, 3, 100)).to.equal('#050364');
    });
    it('should return undefined with wrong red value', function () {
        expect(rgbToHexColor(256, 10, 25)).to.be.undefined;
        expect(rgbToHexColor(2.5, 10, 25)).to.be.undefined;
        expect(rgbToHexColor('hello', 10, 25)).to.be.undefined;
        expect(rgbToHexColor([], 10, 25)).to.be.undefined;
        expect(rgbToHexColor({}, 10, 25)).to.be.undefined;
    });
    it('should return undefined with wrong green value', function () {
        expect(rgbToHexColor(11, -5, 25)).to.be.undefined;
        expect(rgbToHexColor(11, 7.5, 25)).to.be.undefined;
        expect(rgbToHexColor(11, 'hello', 25)).to.be.undefined;
        expect(rgbToHexColor(11, [], 25)).to.be.undefined;
        expect(rgbToHexColor(11, {}, 25)).to.be.undefined;
    });
    it('should return undefined with wrong blue value', function () {
        expect(rgbToHexColor(111, 10, 400)).to.be.undefined;
        expect(rgbToHexColor(111, 10, 9.5)).to.be.undefined;
        expect(rgbToHexColor(111, 10, 'hello')).to.be.undefined;
        expect(rgbToHexColor(111, 10, [])).to.be.undefined;
        expect(rgbToHexColor(111, 10, {})).to.be.undefined;
    });
    it('should return undefined with no arguments', function () {
        expect(rgbToHexColor()).to.be.undefined;
    });
    it('should return undefined with one argument', function () {
        expect(rgbToHexColor(5)).to.be.undefined;
    });
    it('should return undefined with two arguments', function () {
        expect(rgbToHexColor(5, 3)).to.be.undefined;
    });
    it('should return with more than three arguments', function () {
        expect(rgbToHexColor(5, 3, 100, 100)).to.equal('#050364');
    });
    it('should return undefined with negative arguments', function () {
        expect(rgbToHexColor(-5, 3, 100)).to.be.undefined;
        expect(rgbToHexColor(5, -3, 100)).to.be.undefined;
        expect(rgbToHexColor(5, 3, -100)).to.be.undefined;
    });
    it('should return undefined with floating point arguments', function () {
        expect(rgbToHexColor(5.5, 3, 100)).to.be.undefined;
        expect(rgbToHexColor(5, 3.5, 100)).to.be.undefined;
        expect(rgbToHexColor(5, 3, 100.5)).to.be.undefined;
    });
    it('should return undefined with string arguments', function () {
        expect(rgbToHexColor('5', 3, 100)).to.be.undefined;
        expect(rgbToHexColor(5, '3', 100)).to.be.undefined;
        expect(rgbToHexColor(5, 3, '100')).to.be.undefined;
    });
    it('should return undefined with array arguments', function () {
        expect(rgbToHexColor([5], 3, 100)).to.be.undefined;
        expect(rgbToHexColor(5, [3], 100)).to.be.undefined;
        expect(rgbToHexColor(5, 3, [100])).to.be.undefined;
    });
    it('should return undefined with object arguments', function () {
        expect(rgbToHexColor({5:5}, 3, 100)).to.be.undefined;
        expect(rgbToHexColor(5, {3:3}, 100)).to.be.undefined;
        expect(rgbToHexColor(5, 3, {100:100})).to.be.undefined;
    });
    it('should return undefined with null arguments', function () {
        expect(rgbToHexColor(null, 3, 100)).to.be.undefined;
        expect(rgbToHexColor(5, null, 100)).to.be.undefined;
        expect(rgbToHexColor(5, 3, null)).to.be.undefined;
    });
    it('should return undefined with undefined arguments', function () {
        expect(rgbToHexColor(undefined, 3, 100)).to.be.undefined;
        expect(rgbToHexColor(5, undefined, 100)).to.be.undefined;
        expect(rgbToHexColor(5, 3, undefined)).to.be.undefined;
    });
    it('should return undefined with NaN arguments', function () {
        expect(rgbToHexColor(NaN, 3, 100)).to.be.undefined;
        expect(rgbToHexColor(5, NaN, 100)).to.be.undefined;
        expect(rgbToHexColor(5, 3, NaN)).to.be.undefined;
    });
    it('should return undefined with two wrong arguments', function () {
        expect(rgbToHexColor('hello', 272, 100)).to.be.undefined;
        expect(rgbToHexColor('hell0', 11, 272)).to.be.undefined;
        expect(rgbToHexColor(5, 'hello', 272)).to.be.undefined;
    });
    it('should return undefined with all string arguments', function () {
        expect(rgbToHexColor('hello', 'world', 'hello')).to.be.undefined;
    });
    it('should return undefined with all array arguments', function () {
        expect(rgbToHexColor([5], [3], [100])).to.be.undefined;
    });
    it('should return undefined with all object arguments', function () {
        expect(rgbToHexColor({5:5}, {3:3}, {100:100})).to.be.undefined;
    });
    it('should return undefined with all null arguments', function () {
        expect(rgbToHexColor(null, null, null)).to.be.undefined;
    });
    it('should return undefined with all undefined arguments', function () {
        expect(rgbToHexColor(undefined, undefined, undefined)).to.be.undefined;
    });
    it('should return undefined with all NaN arguments', function () {
        expect(rgbToHexColor(NaN, NaN, NaN)).to.be.undefined;
    });
    it('should return undefined with all negative arguments', function () {
        expect(rgbToHexColor(-5, -3, -100)).to.be.undefined;
    });
    it('should return undefined with all floating point arguments', function () {
        expect(rgbToHexColor(5.5, 3.5, 100.5)).to.be.undefined;
    });

    it('should return undefined with all greater arguments', function () {
        expect(rgbToHexColor(500, 401, 256)).to.be.undefined;
    });
    it('should return #FFFFFF for (255, 255, 255)', function() {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('should return #000000 for (0, 0, 0)', function() {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

});
