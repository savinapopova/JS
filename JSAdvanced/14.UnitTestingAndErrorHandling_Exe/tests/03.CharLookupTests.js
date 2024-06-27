import {lookupChar} from "./03.CharLookup.js";
import {expect} from "chai";

describe('Char Look Up', function () {
    it('should return undefined without parameters', function () {
        expect(lookupChar()).to.be.undefined;
    });
    it('should return undefined with one parameter', function () {
        expect(lookupChar('hello')).to.be.undefined;
        expect(lookupChar(2)).to.be.undefined;
    });
    it('should return undefined with one different parameter types', function () {
        expect(lookupChar('hello', 'hello')).to.be.undefined;
        expect(lookupChar('hello', {})).to.be.undefined;
        expect(lookupChar('hello', [2])).to.be.undefined;
        expect(lookupChar('hello', {2:2})).to.be.undefined;
        expect(lookupChar('hello', '2')).to.be.undefined;
        expect(lookupChar('hello', null)).to.be.undefined;
        expect(lookupChar('hello', undefined)).to.be.undefined;
        expect(lookupChar('hello', NaN)).to.be.undefined;
        expect(lookupChar(2, 2)).to.be.undefined;
        expect(lookupChar(['hello'], 2)).to.be.undefined;
        expect(lookupChar({hello: "hello"}, 2)).to.be.undefined;
        expect(lookupChar({}, 2)).to.be.undefined;
        expect(lookupChar({}, 2)).to.be.undefined;
    });
    it('should return undefined with two different parameter types', function () {
        expect(lookupChar(2, 'hello')).to.be.undefined;
        expect(lookupChar({}, {})).to.be.undefined;
        expect(lookupChar(['hello'], [2])).to.be.undefined;
        expect(lookupChar(null, null)).to.be.undefined;
        expect(lookupChar(undefined, undefined)).to.be.undefined;
        expect(lookupChar(NaN, NaN)).to.be.undefined;
    });
    it('should return "Incorrect index" with index < 0', function () {
        expect(lookupChar('hello', -2)).to.equal("Incorrect index");
    });
    it('should return "Incorrect index" with index > string length', function () {
        expect(lookupChar('hello', 10)).to.equal("Incorrect index");
        expect(lookupChar('', 1)).to.equal("Incorrect index");
    });
    it('should return the correct char', function () {
        expect(lookupChar('hello', 0)).to.equal('h');
        expect(lookupChar('hello', 2)).to.equal('l');
        expect(lookupChar('hello', 4)).to.equal('o');
    });
});
