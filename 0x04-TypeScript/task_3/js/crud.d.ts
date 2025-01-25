// Write an ambient file within task_3/js, named crud.d.ts containing the type declarations for each crud function.
// At the top of the file import RowID and RowElement from interface.ts.

import { RowID, RowElement } from './interface';

// create type declarations for each crud function below:

// create
declare function insertRow(row: RowElement): RowID;

// update
declare function updateRow(id: RowID, row: RowElement): RowID;

// delete
declare function deleteRow(id: RowID): void;
