// Create a function named `cleanSet` that returns a string of all the set values
// that start with a specific string (startString).

// It accepts two arguments: a set (Set) and a startString (String).

// When a value starts with startString you only append the rest of the string.
// The string contains all the values of the set separated by -

export default function cleanSet(set, startString) {
  if (!set || !startString || typeof startString !== 'string' || !(set instanceof Set)) {
    return '';
  }

  // const filteredSet = new Set([...set].filter((item) => item.startsWith(startString)));
  // const stringArray = [...filteredSet].map((value) => value.slice(0, startString.length - 1));
  // return stringArray.join('-');

  const items = Array.from(set);
  const newArr = [];

  for (const item of items) {
    if (item && item.startsWith(startString)) {
      newArr.push(item.replace(startString, ''));
    }
  }
  return newArr.join('-');
}
