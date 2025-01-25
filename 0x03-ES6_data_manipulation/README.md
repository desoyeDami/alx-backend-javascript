## This project covers some basics of ES6 data manipulation including: How to use map, filter and reduce on arrays, Typed arrays, The Set, Map, and Weak link data structures

# TASKS

### [0.Basic list of objects](./0-get_list_students.js)
- Write a function named getListStudents that returns an array of objects.

### [1.More mapping](./1-get_list_student_ids.js)
- Write a function named getListStudentIds that returns an array of ids from a list of object.

### [2.Filter](./2-get_student_by_location.js)
- Write a function named updateStudentByLocation that returns an array of students for a specific location.
- It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.
- You must use the filter function on the array.

### [3.Reduce](./3-get_ids_sum.js)
- Write a function named getStudentIdsSum that returns the sum of all the student ids.
- You must use a reduce function on the array of students.

### [4.Combine](./4-update_grade_by_city.js)
- Write a function named `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade
- It should accept a list of students (from `getListStudents`), a `city` (string), and `newGrades` (array of grades) as parameters
- You must use `filter` and `map` combined.

### [5.Typed Arrays](./5-typed_arrays.js)
- Write a function named `createInt8TypedArray` that returns a new `ArrayBuffer` with a `Int8` value at a specific position.
- It should accept a `length` (number), `position` (number) and `value` (Number) as parameters.
- If adding the value is not possible the error `Position outside range` should be thrown.


### [6.Set data structure](./6-set.js)
- Write a function named `setFromArray` that returns a set from an array.
- It should accept an (Array, of any kind of element).

### [7.More set data structure](./7-has_array_values.js)
- Write a function named `hasValuesFromArray` that returns a boolean if all the elements from the array exist in the set.
- It should accept a `set` (Set) and `array` (Array) as parameters.

### [8.Clean set](./8-clean_set.js)
- Write a function named `cleanSet` that returns a string 
of all the set values that start with a specific string (`startString`).
- It should accept a `set` (Set) and `startString` (string) as parameters.
- When a value starts with `startString` you only append the rest of the string. The string contains all the values of the set separated by -.

### [9.Map data structure](./9-groceries_list.js)
- Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):
```
Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5
```

### [10.More map data structure](./10-update_uniq_items.js)
- Write a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.
- It should accept a `map` (Map) as a parameter.
- For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error `Cannot process` should be thrown.

### [11.Weak link data structure](./100-weak.js)
- Export a const instance of WeakMap and name it weakMap.
- Export a new function named queryAPI. It should accept an endpoint argument like so:
```
  {
    protocol: 'http',
    name: 'getUsers',
  }
```
- Track within the weakMap the number of times queryAPI is called for each endpoint.
- When the number of queries is >= 5 throw an error with the message Endpoint load is high.
