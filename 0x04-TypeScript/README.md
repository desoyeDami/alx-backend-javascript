## This project covers Basic types in Typescript, Interfaces, Classes and functions in Typescript, Generic types, Namespaces and merging declarations in Typescript, the DOM and TypeScript, using ambient Namespace to import an external library, and basic nominal typing with Typescript.

# TASKS

### [0. Creating an interface for a student](./task_0/js/main.ts)
Write your code in the `main.ts` file:

- Write an interface named Student that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`
- Create two students, and create an array named `studentsList` containing the two variables
- Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
- Each row should contain the first name of the student and the location

### [1. Let's build a Teacher interface](./task_1/js/main.ts)

- `firstName(string)` and `lastName(string)`. These two attributes should only be modifiable when a Teacher is first initialized
- `fullTimeEmployee(boolean)` this attribute should always be defined
- `yearsOfExperience(number)` this attribute is optional
- `location(string)` this attribute should always be defined
- Add the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute

Example: 
```
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
```
should print
```
{
    contract: false
    firstName: "John"
    fullTimeEmployee: false
    lastName: "Doe"
}
```

### [2. Extending the Teacher class](./task_1/js/main.ts)

- Write an interface named `Directors` that [extends](https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction) `Teacher`. It requires an attribute named `numberOfReports(number)`

Example:
```
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
```
should print
```
{
    firstName: "John"
    fullTimeEmployee: true
    lastName: "Doe"
    location: "London"
    numberOfReports: 17
}
```

### [3. Printing teachers](./task_1/js/main.ts)
Write a function `printTeacher`:
- It accepts two arguments `firstName` and `lastName`
- It returns the first letter of the firstName and the full lastName
- Example: `printTeacher("John", "Doe") -> J. Doe`
Write an [interface for the function](https://www.typescriptlang.org/docs/handbook/interfaces.html#function-types) named `printTeacherFunction`.


### [4. Writing a class](./task_1/js/main.ts)
Write a [class](https://www.typescriptlang.org/docs/handbook/interfaces.html#class-types) named `StudentClass`:
- The constructor accepts `firstName(string)` and `lastName(string)` arguments
- The class has a method named `workOnHomework` that return the string `Currently working`.
- The class has a method named `displayName`. It returns the `firstName` of the student
- The constructor of the class should be described through an Interface
- The class should be described through an Interface

### [5. Advanced types Part 1](./task_2/js/main.ts)
Create the DirectorInterface interface with the 3 expected methods:

- `workFromHome()` returning a string
- `getCoffeeBreak()` returning a string
- `workDirectorTasks()` returning a string

Create the TeacherInterface interface with the 3 expected methods:

- `workFromHome()` returning a string
- `getCoffeeBreak()` returning a string
- `workTeacherTasks()` returning a string

Create a class Director that will implement DirectorInterface

- `workFromHome` should return the string `Working from home`
- `getToWork` should return the string `Getting a coffee break`
- `workDirectorTasks` should return the string `Getting to director tasks`

Create a class Teacher that will implement TeacherInterface

- `workFromHome` should return the string `Cannot work from home`
- `getCoffeeBreak` should return the string `Cannot have a break`
- `workTeacherTasks` should return the string `Getting to work`

Create a function `createEmployee` with the following requirements:

- It can return either a `Director` or a `Teacher` instance
- It accepts 1 arguments:
  - `salary`(either number or string)
- if salary is a number and less than 500 - It should return a new `Teacher`. Otherwise it should return a `Director`
Expected result:
```
console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
```

### [6. Advanced types Part 2](./task_2/js/main.ts)
Write a function `isDirector`:

- it accepts `employee` as an argument
- it will be used as a [type predicate](https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates) and if the employee is a director
Write a function `executeWork`:

- it accepts `employee` as an argument
- if the employee is a Director, it will call `workDirectorTasks`
- if the employee is a Teacher, it will call `workTeacherTasks`
Expected result:
```
executeWork(createEmployee(200));
Getting to work
executeWork(createEmployee(1000));
Getting to director tasks
```

### [7. Type checking](./task_2/js/main.ts)

Write a [String literal type](https://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types) named `Subjects` allowing a variable to have the value `Math` or `History` only. Write a function named `teachClass`:

- it takes `todayClass` as an argument
- it will return the string `Teaching Math` if `todayClass` is `Math`
- it will return the string `Teaching History` if `todayClass` is History

Expected result:
```
teachClass('Math');
Teaching Math
teachClass('History');
Teaching History
```

### [8. Ambient Namespaces](./task_3/js/main.ts)

### [9. Namespace & Declaration merging](./task_3/js/subject)

### [10. Update task_4/js/main.ts](./task_4/js/main.ts)

- create and export a constant `cpp` for Cpp Subjects
- create and export a constant `java` for Java Subjects
- create and export a constant `react` for React Subjects
- create and export one Teacher object `cTeacher` with `experienceTeachingC = 10`
- for Cpp subject, log to the console `C++`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher` and print the strings they return
- for Java subject, log to the console Java, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return
- for React subject, log to the console `React`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return

### [11. Brand convention & Nominal typing](./task_5/js/main.ts)

Create a directory `task_5` and copy these configuration files into the root of task_5: `package.json`, `tsconfig.json`, `webpack.config.js`

Create two interfaces `MajorCredits` and `MinorCredits` in `task_5/js/main.ts`:

- Each interface defines a number named `credits`
- Add a brand property to each interface in order to uniquely identify each of them

Create two functions named `sumMajorCredits` and `sumMinorCredits` in `task_5/js/main.ts`:
- Each function takes two arguments `subject1` and `subject2`
- `sumMajorCredits` returns `MajorCredits` value and `sumMinorCredits` returns `MinorCredits` value
- Each function sums the credits of the two subjects