import {StringBuilder} from "./13.StringBuilder.js";
import {expect} from "chai";

describe('StringBuilder', function () {
    it('should create instance with string', function () {
        let sb = new StringBuilder('hello');
        expect(sb.toString()).to.be.equal('hello');
        expect(sb._stringArray.length).to.equal(5);
        expect(typeof sb).to.equal('object');
        expect(sb instanceof StringBuilder).to.be.true;
    });
    it('should be initialized without params', function () {
        let sb = new StringBuilder();
        expect(sb.toString()).to.be.equal('');
        expect(sb._stringArray).to.deep.equal([]);
        expect(sb instanceof StringBuilder).to.be.true;
    });
    it('should be initialized with undefined', function () {
        let sb = new StringBuilder(undefined);
        expect(sb.toString()).to.be.equal('');
        expect(sb._stringArray).to.deep.equal([]);
        expect(sb instanceof StringBuilder).to.be.true;
    });
    it('should have all methods', function () {
        expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.true;
        expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.true;
        expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.true;
        expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.true;
    });
    it('should have static method _vrfyParam', function () {
        expect(StringBuilder).to.have.property('_vrfyParam');
    });
    it('should have _stringArray property', function () {
        let sb = new StringBuilder();
        expect(sb).to.have.property('_stringArray');
    });
    it('should throw when param is not a string', function () {
        expect(() => new StringBuilder(5)).to.throw(TypeError,"Argument must be a string");
        expect(() => new StringBuilder(5.5)).to.throw(TypeError,"Argument must be a string");
        expect(() => new StringBuilder(false)).to.throw(TypeError,"Argument must be a string");
        expect(() => new StringBuilder(['hello'])).to.throw(TypeError,"Argument must be a string");
        expect(() => new StringBuilder({})).to.throw(TypeError,"Argument must be a string");
        expect(() => new StringBuilder(null)).to.throw(TypeError,"Argument must be a string");
        expect(() => new StringBuilder(NaN)).to.throw(TypeError,"Argument must be a string");
    });
    it('append should work correctly with a string', function () {
        let sb = new StringBuilder('hello');
        sb.append('hi');
        expect(sb.toString()).to.equal('hellohi');
        expect(sb._stringArray).to.deep.equal(Array.from('hellohi'));
    });
    it('append should work correctly with an empty string', function () {
        let sb = new StringBuilder('hello');
        sb.append('');
        expect(sb.toString()).to.equal('hello');
    });
    it('append should throw when param is not a string', function () {
        let sb = new StringBuilder('hello');
        expect(() => sb.append(5)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.append(5.5)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.append(['hi'])).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.append({})).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.append(undefined)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.append(null)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.append(NaN)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.append(false)).to.throw(TypeError,"Argument must be a string");
    });
    it('append should throw without param', function () {
        let sb = new StringBuilder('hello');
        expect(() => sb.append()).to.throw(TypeError,"Argument must be a string");
    });
    it('prepend should work correctly with a string', function () {
        let sb = new StringBuilder('hello');
        sb.prepend('hi');
        expect(sb.toString()).to.equal('hihello');
        expect(sb._stringArray).to.deep.equal(Array.from('hihello'));
    });
    it('prepend should work correctly with an empty string', function () {
        let sb = new StringBuilder('hello');
        sb.prepend('');
        expect(sb.toString()).to.equal('hello');
    });
    it('prepend should throw when param is not a string', function () {
        let sb = new StringBuilder('hello');
        expect(() => sb.prepend(5)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.prepend(5.5)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.prepend(false)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.prepend(['hi'])).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.prepend({})).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.prepend(undefined)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.prepend(null)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.prepend(NaN)).to.throw(TypeError,"Argument must be a string");
    });
    it('prepend should throw without param', function () {
        let sb = new StringBuilder('hello');
        expect(() => sb.prepend()).to.throw(TypeError,"Argument must be a string");
    });
    it('insertAt should work correctly with two correct params', function () {
        let sb = new StringBuilder('hello');
        sb.insertAt('A', 2);
        expect(sb.toString()).to.equal('heAllo');
        expect(sb._stringArray).to.deep.equal(Array.from('heAllo'));
        sb.insertAt('A', 0);
        expect(sb.toString()).to.equal('AheAllo');
        expect(sb._stringArray).to.deep.equal(Array.from('AheAllo'));
        sb.insertAt('A', 6);
        expect(sb.toString()).to.equal('AheAllAo');
        expect(sb._stringArray).to.deep.equal(Array.from('AheAllAo'));
    });
    it('insertAt should work only with one string param', function () {
        let sb = new StringBuilder('hello');
        sb.insertAt('A');
        expect(sb.toString()).to.equal('Ahello');
    });
    it('insertAt should throw with one non string param', function () {
        let sb = new StringBuilder('hello');
        expect(() => sb.insertAt(5)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.insertAt(5.5)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.insertAt(false)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.insertAt(['hi'])).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.insertAt({})).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.insertAt(undefined)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.insertAt(null)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.insertAt(NaN)).to.throw(TypeError,"Argument must be a string");
    });
    it('insertAt should throw with one non string and correct indexparam', function () {
        let sb = new StringBuilder('hello');
        expect(() => sb.insertAt(5, 2)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.insertAt(5.5,2)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.insertAt(['hi'], 2)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.insertAt({}, 2)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.insertAt(undefined, 2)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.insertAt(null, 2)).to.throw(TypeError,"Argument must be a string");
        expect(() => sb.insertAt(NaN, 2)).to.throw(TypeError,"Argument must be a string");
    });
    it('insertAt should work correctly with string ond index out of bound', function () {
        let sb = new StringBuilder('hello');
        sb.insertAt('A', -2);
        expect(sb.toString()).to.equal('helAlo');
        expect(sb._stringArray).to.deep.equal(Array.from('helAlo'));
        sb.insertAt('A', 6);
        expect(sb.toString()).to.equal('helAloA');
        expect(sb._stringArray).to.deep.equal(Array.from('helAloA'));
        sb.insertAt('A', 10);
        expect(sb.toString()).to.equal('helAloAA');
        expect(sb._stringArray).to.deep.equal(Array.from('helAloAA'));
    });
    it('insertAt should work correctly with an empty string', function () {
        let sb = new StringBuilder('hello');
        sb.insertAt('', 2);
        expect(sb.toString()).to.equal('hello');
    });
    it('insertAt should work correctly with an empty string and index out of bound', function () {
        let sb = new StringBuilder('hello');
        sb.insertAt('', -2);
        expect(sb.toString()).to.equal('hello');
        sb.insertAt('', 10);
        expect(sb.toString()).to.equal('hello');
    });
    it('insertAt should work correctly with string ond non integer index', function () {
        let sb = new StringBuilder('hello');
        sb.insertAt('A', 'a');
        expect(sb.toString()).to.equal('Ahello');
        expect(sb._stringArray).to.deep.equal(Array.from('Ahello'));
        sb.insertAt('A', 2.5);
        expect(sb.toString()).to.equal('AhAello');
        expect(sb._stringArray).to.deep.equal(Array.from('AhAello'));
        sb.insertAt('A', ['A']);
        expect(sb.toString()).to.equal('AAhAello');
        expect(sb._stringArray).to.deep.equal(Array.from('AAhAello'));
        sb.insertAt('A', {});
        expect(sb.toString()).to.equal('AAAhAello');
        expect(sb._stringArray).to.deep.equal(Array.from('AAAhAello'));
        sb.insertAt('A', undefined);
        expect(sb.toString()).to.equal('AAAAhAello');
        expect(sb._stringArray).to.deep.equal(Array.from('AAAAhAello'));
        sb.insertAt('A', null);
        expect(sb.toString()).to.equal('AAAAAhAello');
        expect(sb._stringArray).to.deep.equal(Array.from('AAAAAhAello'));
        sb.insertAt('A', NaN);
        expect(sb.toString()).to.equal('AAAAAAhAello');
        expect(sb._stringArray).to.deep.equal(Array.from('AAAAAAhAello'));
    });
    it('remove should work correctly with 2 valid params', function () {
        let sb = new StringBuilder('Goodbye');
        sb.remove(1, 2);
        expect(sb.toString()).to.equal('Gdbye');
        sb = new StringBuilder('Goodbye');
        sb.remove(0, 1);
        expect(sb.toString()).to.equal('oodbye');
        sb = new StringBuilder('Goodbye');
        sb.remove(6, 1);
        expect(sb.toString()).to.equal('Goodby');
    });
    it('remove should work correctly with 1 valid param', function () {
        let sb = new StringBuilder('Goodbye');
        sb.remove(1);
        expect(sb.toString()).to.equal('Goodbye');
        sb.remove(0);
        expect(sb.toString()).to.equal('Goodbye');
        sb.remove(6);
        expect(sb.toString()).to.equal('Goodbye');
    });
    it('remove should work correctly with 2 valid params out of bound', function () {
        let sb = new StringBuilder('Goodbye');
        sb.remove(-1, 2);
        expect(sb.toString()).to.equal('Goodby');
        sb = new StringBuilder('Goodbye');
        sb.remove(0, 10);
        expect(sb.toString()).to.equal('');
        sb = new StringBuilder('Goodbye');
        sb.remove(6, 10);
        expect(sb.toString()).to.equal('Goodby');
        sb = new StringBuilder('Goodbye');
        sb.remove(7, 10);
        expect(sb.toString()).to.equal('Goodbye');
    });
    it('remove should work correctly with 1 valid param out of bound', function () {
        let sb = new StringBuilder('Goodbye');
        sb.remove(-1);
        expect(sb.toString()).to.equal('Goodbye');
        sb = new StringBuilder('Goodbye');
        sb.remove(10);
        expect(sb.toString()).to.equal('Goodbye');
    });
    it('remove should not change the string when length is 0', function () {
        let sb = new StringBuilder('test');
        sb.remove(1, 0);
        expect(sb.toString()).to.equal('test');
    });
    it('_vrfyParam should throw with non string param', function () {
        expect(() => StringBuilder._vrfyParam(5)).to.throw(TypeError,"Argument must be a string");
        expect(() => StringBuilder._vrfyParam(5.5)).to.throw(TypeError,"Argument must be a string");
        expect(() => StringBuilder._vrfyParam(false)).to.throw(TypeError,"Argument must be a string");
        expect(() => StringBuilder._vrfyParam(['hi'])).to.throw(TypeError,"Argument must be a string");
        expect(() => StringBuilder._vrfyParam({})).to.throw(TypeError,"Argument must be a string");
        expect(() => StringBuilder._vrfyParam(undefined)).to.throw(TypeError,"Argument must be a string");
        expect(() => StringBuilder._vrfyParam(null)).to.throw(TypeError,"Argument must be a string");
        expect(() => StringBuilder._vrfyParam(NaN)).to.throw(TypeError,"Argument must be a string");
    });
    it('toString should work correctly', function () {
        let sb = new StringBuilder('test');
        expect(sb.toString()).to.equal('test');
        sb = new StringBuilder();
        expect(sb.toString()).to.equal('');
    });
    it('_stringArray should have the correct value', function () {
        let sb = new StringBuilder('test');
        expect(sb._stringArray).to.deep.equal(Array.from('test'));
        sb = new StringBuilder();
        expect(sb._stringArray).to.deep.equal([]);
    });
    it('should works correctly with combination of different methods',() => {

        const sb = new StringBuilder('test');
        sb.append('one');
        sb.prepend('two');
        sb.insertAt('four', 1);
        sb.remove(3, 3);
        expect(sb.toString()).to.equal('tfootestone');
    });
});

