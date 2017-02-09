const util = require('./util');
const Ajv = require('ajv');
const Joi = require('joi');

class Validator {
  constructor() {
    this.name= 'Validator-Server';
    this.version= '0.0.1';
    this.subVendors= {
      Ajv, Joi
    };

    // for convenience
    this.ajv = new this.subVendors.Ajv();
    this.joi = this.subVendors.Joi;
  }

  addVendor(vendorName, vendorFunction) {
    this.subVendors[vendorName] = vendorFunction;
  }

  setVendorOption(vendorName, options) {
    this.subVendors[vendorName] = new this.subVendors[vendorName](options);
  }

  test(options, schema) {
    return new Promise((res, rej) => {

    })
  }
}



module.exports = Validator;