const { describe, it } = require('mocha');

const expect = require('chai').expect;
const Validator = require('../index');
const Ajv = require('ajv');
const Joi = require('joi');

describe('/vn-validator-server/', () => {

  it('#Instance of Validator', () => {

    const v = new Validator();
    expect(v).to.be.an.instanceof(Validator);

  });

  it('#Instance\'s property', () => {

    const v = new Validator();
    expect(v.name).to.equal('Validator-Server');
    expect(v.version).to.equal('0.0.1');

  });

  it('#add Instance vendor', () => {

    const v = new Validator();
    const mockVendor = function name() {};
    const vendorName = 'newValidator';

    v.addVendor(vendorName, mockVendor);
    expect(v.subVendors[vendorName]).to.equal(mockVendor);

  });

  describe('/From AJV/', () => {
    it('#v.ajv is Instance of Ajv', () => {

      const v = new Validator();
      expect(v.ajv).to.be.an.instanceof(Ajv);

    });
  });

  describe('/From Joi/', () => {
    it('#v.joi is Instance of Joi', () => {

      const v = new Validator();
      expect(v.joi).to.equal(Joi);

    });
  });
});
