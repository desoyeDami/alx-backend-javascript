// Implement a class named Currency:
// - Constructor attributes:
// code (String)
// name (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter and setter for each attribute.
// Implement a method named displayFullCurrency that will return
// the attributes in the following format name (code).

export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    this._code = code;
  }

  set name(setName) {
    this._name = setName;
  }

  get name() {
    return this._name;
  }

  set code(setCode) {
    this._code = setCode;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
