// Implement a class named HolbertonCourse:
// Constructor attributes:
// name (String)
// length (Number)
// students (array of Strings)
// Make sure to verify the type of attributes during object creation
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter and setter for each attribute.

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(setName) {
    if (typeof setName === 'string') {
      this._name = setName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(setLenght) {
    if (typeof setLenght === 'number') {
      this._length = setLenght;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(setStudents) {
    if (Array.isArray(setStudents)) {
      this._students = setStudents;
    } else {
      throw new TypeError('Students must be an array');
    }
  }

  get students() {
    return this._students;
  }
}
