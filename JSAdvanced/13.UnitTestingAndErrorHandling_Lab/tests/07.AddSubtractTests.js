import {createCalculator} from "./07.AddSubtract.js";
import {expect} from "chai";

describe('Calculator', function () {
    it('should return object', function () {
        expect(createCalculator()).to.be.a('object');
    });
    it('should contains add', function () {
        expect(createCalculator()).to.have.property('add');
    });
    it('should contains subtract', function () {
        expect(createCalculator()).to.have.property('subtract');
    });
    it('should contains get', function () {
        expect(createCalculator()).to.have.property('get');
    });
    it('should not have access to  value', function () {
        expect(createCalculator()).not.to.have.property('value');
    });
    it('should return 0', function () {
        expect(createCalculator().get()).to.equal(0);
    });
    it('add should take a number', function () {
        let calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
        calculator.add(5);
        expect(calculator.get()).to.equal(5);
    });
    it('add should take a string that can be parsed as a number', function () {
        let calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
        calculator.add('5');
        expect(calculator.get()).to.equal(5);
    });
    it('add should not take a string that can not be parsed as a number', function () {
        let calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
        calculator.add('hello');
        expect(calculator.get()).to.be.NaN;
    });
    it('add should not take a value that can not be parsed as a number', function () {
        let calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
        calculator.add();
        calculator.add('');
        calculator.add([3, 2, 5]);
        calculator.add({3:3});
        expect(calculator.get()).to.be.NaN;
    });
    it('subtract should take a number', function () {
        let calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
        calculator.subtract(5);
        expect(calculator.get()).to.equal(-5);
    });
    it('subtract should take a string that can be parsed as a number', function () {
        let calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
        calculator.subtract('5');
        expect(calculator.get()).to.equal(-5);
    });
    it('subtract should not take a string that can not be parsed as a number', function () {
        let calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
        calculator.subtract('hello');
        expect(calculator.get()).to.be.NaN;
    });
    it('subtract should not take a value that can not be parsed as a number', function () {
        let calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
        calculator.subtract();
        calculator.subtract('');
        calculator.subtract([3, 2, 5]);
        calculator.subtract({3:3});
        expect(calculator.get()).to.be.NaN;
    });

});
