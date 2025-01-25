"use strict";
// At the top of the file create a triple slash directive that includes all the dependencies from crud.d.ts
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from crud.js as CRUD
var CRUD = require("./crud");
// Create an object called row with the type RowElement with the fields set to these values:
// firstName: Guillaume
// lastName: Salva
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
// Create a const variable named newRowID with the type RowID and assign the value the insertRow command.
var newRowID = CRUD.insertRow(row);
// Next, create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
var updateRow = __assign(__assign({}, row), { age: 23 });
// Finally, call the updateRow and deleteRow commands.
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
// Expected result:
const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}
const updatedRow = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}
CRUD.deleteRow(125);
// Delete row id 125
