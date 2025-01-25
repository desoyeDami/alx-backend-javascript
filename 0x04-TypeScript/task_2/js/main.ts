// The documentation that helped me solve each task is listed above each task as a comment called "Sources"

// testing any task can be done as a .js file and run with node
// example: node main.js
// .ts can be compiled locally into a .js file using the command `tsc main.ts`. This will create a main.js
// file in the same directory as the main.ts file. tsc is the TypeScript compiler. It takes in TypeScript
// code and spits out JavaScript code. run `npm install -g typescript` on the terminal before using tsc.


// TASK 5

// Create the DirectorInterface interface with the 3 expected methods:
// workFromHome() returning a string
// getCoffeeBreak() returning a string
// workDirectorTasks() returning a string

// Create the TeacherInterface interface with the 3 expected methods:
// workFromHome() returning a string
// getCoffeeBreak() returning a string
// workTeacherTasks() returning a string

// Create a class Director that will implement DirectorInterface
// workFromHome should return the string Working from home
// getToWork should return the string Getting a coffee break
// workDirectorTasks should return the string Getting to director tasks

// Create a class Teacher that will implement TeacherInterface
// workFromHome should return the string Cannot work from home
// getCoffeeBreak should return the string Cannot have a break
// workTeacherTasks should return the string Getting to work

// Create a function createEmployee with the following requirements:
// It can return either a Director or a Teacher instance
// It accepts 1 arguments:
// salary(either number or string)
// if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director

// source: https://www.typescriptlang.org/docs/handbook/interfaces.html#class-types

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome = () => "Working from home";
    getCoffeeBreak = () => "Getting a coffee break";
    workDirectorTasks = () => "Getting to director tasks"; 
}

class Teacher implements TeacherInterface {
    workFromHome = () => "Cannot work from home";
    getCoffeeBreak = () => "Cannot have a break";
    workTeacherTasks = () => "Getting to work";
}

const createEmployee = (salary: number | string): Director | Teacher => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// test as a .js file
// console.log(createEmployee(200));
// Teacher
// console.log(createEmployee(1000));
// Director
// console.log(createEmployee('$500'));
// Director
// console.log(createEmployee('$300'));
// Director


// TASK 6

// Write a function isDirector:

// it accepts employee as an argument
// it will be used as a type predicate and if the employee is a director
// Write a function executeWork:

// it accepts employee as an argument
// if the employee is a Director, it will call workDirectorTasks
// if the employee is a Teacher, it will call workTeacherTasks

// source: https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates
// source: https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types

const isDirector = (employee: Director | Teacher): employee is Director => {
    return employee instanceof Director;
}

const executeWork = (employee: Director | Teacher): string => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// test as a .js file
// console.log(executeWork(createEmployee(200)));
// Getting to work
// console.log(executeWork(createEmployee(1000)));
// Getting to director tasks


// TASK 7

// Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function named teachClass:

// it takes todayClass as an argument
// it will return the string Teaching Math if todayClass is Math
// it will return the string Teaching History if todayClass is History

// source: https://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): string => (todayClass === "Math") ? "Teaching Math" : "Teaching History";

// test as a .js file
// console.log(teachClass("Math"));
// Teaching Math
// console.log(teachClass("History"));
// Teaching History

