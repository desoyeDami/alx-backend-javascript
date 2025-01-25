// You are building the next part of the application architecture. The goal is to save the entities to a database.
// Because of time constraints, you can’t write a connector to the database,
// and you decided to download a library called crud.js. Copy this file into the task_3/js directory.

// The crud.js library provides a global object called crud. This object has the following methods:

export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}
  
export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}
  
export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}

//   The crud object has three methods: insertRow, deleteRow, and updateRow. Each method takes different arguments and returns different value