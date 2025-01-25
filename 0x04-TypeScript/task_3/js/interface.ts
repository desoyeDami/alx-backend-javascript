// Create a directory called task_3 and copy these configuration files into it: package.json, webpack.config.js, tsconfig.json.

// Create a directory called js inside task_3 and create a file called interface.ts inside it.

// The first part of will require that you build an interface and a type. Inside a file named interface.ts:

// Create a type `RowID` and set it equal to `number`
// Create an interface `RowElement` that contains these 3 fields:
// firstName: string
// lastName: string
// age?: number

// create a tyepe RowID and set it equal to number
type RowID = number;

interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}

export { RowID, RowElement };
