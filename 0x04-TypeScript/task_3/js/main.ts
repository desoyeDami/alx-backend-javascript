// At the top of the file create a triple slash directive that includes all the dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />

// Import the rowID type and rowElement from interface.ts

import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD

import * as CRUD from './crud';

// Create an object called row with the type RowElement with the fields set to these values:

// firstName: Guillaume
// lastName: Salva

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

// Create a const variable named newRowID with the type RowID and assign the value the insertRow command.

const newRowID: RowID = CRUD.insertRow(row);

// Next, create a const variable named updatedRow with the type RowElement and update row with an age field set to 23

const updateRow: RowElement = {
    ...row,
    age: 23
};

// Finally, call the updateRow and deleteRow commands.

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);


// Expected result:

// const obj = {firstName: "Guillaume", lastName: "Salva"};
// CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

// const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
// CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

// CRUD.deleteRow(125);
// Delete row id 125