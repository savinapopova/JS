import {PaymentPackage} from "./12.PaymentPackage.js";
import {expect} from "chai";

describe('PaymentPackage', function () {


    it('should create instance with 2 valid params', function () {
        expect(new PaymentPackage('current', 50) instanceof PaymentPackage).to.be.true;
        expect(new PaymentPackage('current', 50.5) instanceof PaymentPackage).to.be.true;
    });
    it('should throw with invalid name', function () {
        expect(() => new PaymentPackage(50, 50)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(['current'], 50)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage({}, 50)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(null, 50)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(undefined, 50)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(NaN, 50)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage('', 50)).to.throw('Name must be a non-empty string');
    });
    it('should throw with invalid value', function () {
        expect(() => new PaymentPackage('current', 'hello')).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('current', [50])).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('current', {})).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('current', null)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('current', undefined)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('current', -5)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('current', -5.5)).to.throw('Value must be a non-negative number');
    });
    it('should throw with 2 invalid params', function () {
        expect(() => new PaymentPackage(50, -50)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(['current'], ['current'])).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage({}, {})).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(null, null)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(undefined, undefined)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(NaN, 'bye')).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage('', -50)).to.throw('Name must be a non-empty string');
    });
    it('should get the correct name', function () {
        let current = new PaymentPackage('test', 20);
        expect(current.name).to.equal('test');
    });
    it('should set name with string', function () {
        let current = new PaymentPackage('test', 2);
        current.name = 'test2';
        expect(current.name).to.equal('test2');
    });
    it('should throw when name is not a string', function () {
        let current = new PaymentPackage('test', 2);
        expect(() => current.name = 50).to.throw('Name must be a non-empty string');
        expect(() => current.name = 50.5).to.throw('Name must be a non-empty string');
        expect(() => current.name = ['test2']).to.throw('Name must be a non-empty string');
        expect(() => current.name = {}).to.throw('Name must be a non-empty string');
        expect(() => current.name = null).to.throw('Name must be a non-empty string');
        expect(() => current.name = undefined).to.throw('Name must be a non-empty string');
        expect(() => current.name = NaN).to.throw('Name must be a non-empty string');
        expect(() => current.name = '').to.throw('Name must be a non-empty string');
    });
    it('should set value with number', function () {
        let current = new PaymentPackage('test', 2);
        current.value = 30;
        expect(current.value).to.equal(30);
        current.value = 30.5;
        expect(current.value).to.equal(30.5);
    });
    it('should throw when value is not a number', function () {
        let current = new PaymentPackage('test', 2);
        expect(() => current.value = 'hi').to.throw('Value must be a non-negative number');
        expect(() => current.value = [4]).to.throw('Value must be a non-negative number');
        expect(() => current.value = {}).to.throw('Value must be a non-negative number');
        expect(() => current.value = null).to.throw('Value must be a non-negative number');
        expect(() => current.value = undefined).to.throw('Value must be a non-negative number');
        expect(() => current.value = -5).to.throw('Value must be a non-negative number');
    });
    it('should get the correct VAT', function () {
        let current1 = new PaymentPackage('test', 7);
        let current2 = new PaymentPackage('test2', 80);
        expect(current1.VAT).to.equal(20);
        expect(current2.VAT).to.equal(20);
    });
    it('should set VAT with correct data', function () {
        let current = new PaymentPackage('test', 7);
        expect(current.VAT).to.equal(20);
        current.VAT = 40;
        expect(current.VAT).to.equal(40);
        current.VAT = 40.5;
        expect(current.VAT).to.equal(40.5);
    });
    it('should throw when set VAT with wrong data', function () {
        let current = new PaymentPackage('test', 7);
        expect(() => current.VAT = 'hello').to.throw('VAT must be a non-negative number');
        expect(() => current.VAT = [5]).to.throw('VAT must be a non-negative number');
        expect(() => current.VAT = {}).to.throw('VAT must be a non-negative number');
        expect(() => current.VAT = null).to.throw('VAT must be a non-negative number');
        expect(() => current.VAT = undefined).to.throw('VAT must be a non-negative number');
        expect(() => current.VAT = -5).to.throw('VAT must be a non-negative number');
    });
    it('should get the correct value of active', function () {
        let current = new PaymentPackage('test', 7);
        expect(current.active).to.be.true;
    });
    it('should set the correct value of active with boolean', function () {
        let current = new PaymentPackage('test', 7);
        expect(current.active).to.be.true;
        current.active = false;
        expect(current.active).to.be.false;
        current.active = true;
        expect(current.active).to.be.true;
    });
    it('should throw when active is not a boolean', function () {
        let current = new PaymentPackage('test', 7);
        expect(() => current.active = 'hello').to.throw('Active status must be a boolean');
        expect(() => current.active = 50).to.throw('Active status must be a boolean');
        expect(() => current.active = 50.5).to.throw('Active status must be a boolean');
        expect(() => current.active = [5]).to.throw('Active status must be a boolean');
        expect(() => current.active = {}).to.throw('Active status must be a boolean');
        expect(() => current.active = null).to.throw('Active status must be a boolean');
        expect(() => current.active = undefined).to.throw('Active status must be a boolean');
        expect(() => current.active = -5).to.throw('Active status must be a boolean');
    });
    it('toString() should not have active', function () {
        let current = new PaymentPackage('test', 100);
        expect(current.toString()).to
            .equal('Package: test\n' +
                '- Value (excl. VAT): 100\n' +
                '- Value (VAT 20%): 120');
    });
    it('toString() should have inactive', function () {
        let current = new PaymentPackage('test', 100);
        current.active = false;
        expect(current.toString()).to
            .equal('Package: test (inactive)\n' +
                '- Value (excl. VAT): 100\n' +
                '- Value (VAT 20%): 120');
    });
    it('toString() should return correct data when value is 0', function () {
        let current = new PaymentPackage('test', 0);
        expect(current.toString()).to
            .equal('Package: test\n' +
                '- Value (excl. VAT): 0\n' +
                '- Value (VAT 20%): 0');
    });

    it('should have all properties', function () {
        let current = new PaymentPackage('test', 100);
        expect(current).to.have.property('name');
        expect(current).to.have.property('value');
        expect(current).to.have.property('VAT');
        expect(current).to.have.property('active');
        expect(current).to.have.property('toString');
    });
});

