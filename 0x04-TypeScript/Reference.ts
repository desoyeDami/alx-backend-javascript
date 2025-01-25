// interfaces

interface User {
    name: string;
    id: number;
}

// () : User  => {
//     return {
//         name: 'John',
//         id: 1
//     };
// }

// (user: User) => {
//     return user.name;
// }

// (user: User) => user.name;

// return type annotation
function getAdminUser(): User {
    // return User type
}

// parameter type annotation
function deleteUser(user: User) {
    // delete User type
}


// types and unions
type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
function getLength(obj: string | string[]) {
  return obj.length;
}

// interfaces can be extended easily

interface Animal {
  name: string
}
interface Bear extends Animal {
  honey: boolean
}
  
const bear = getBear() 
bear.name
bear.honey
          