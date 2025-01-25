// Import the class Currency from 3-currency.js
// Implement a class named Pricing:
// Constructor attributes: amount (Number) currency (Currency)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter and setter for each attribute.
// Implement a method named displayFullPrice that returns the attributes in the
// following format amount currency_name (currency_code).
// Implement a static method named convertPrice. It should accept
// two arguments: amount (Number), conversionRate (Number). The function should
// return the amount multiplied by the conversion rate.

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency instance');
    }
    this._amount = amount;
    this._currency = currency;
  }

  set amount(setAmount) {
    this._amount = setAmount;
  }

  get amount() {
    return this._amount;
  }

  set currency(setCurrency) {
    this._currency = setCurrency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
