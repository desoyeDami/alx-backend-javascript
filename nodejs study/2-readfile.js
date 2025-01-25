const fs = require('fs');
// const fs = require('fs/promises');

// fs.stat('../0x05-Node_JS_basic/database.csv', (err, stats) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log(stats);
//     }
// });

// sync method, which blocks the thread until the file stats are ready:

// try {
//     const stats = fs.statSync('../0x05-Node_JS_basic/database.csv');
//     console.log(stats.isFile());
// } catch (err) {
//     console.log(err);
// }


// async method, which uses a callback function to handle the file stats:
// const fs = require('fs/promises');

// async function example() {
//   try {
//     const stats = await fs.stat('/Users/joe/test.txt');
//     stats.isFile(); // true
//     stats.isDirectory(); // false
//     stats.isSymbolicLink(); // false
//     stats.size; // 1024000 //= 1MB
//   } catch (err) {
//     console.log(err);
//   }
// }
// example();

// read file

fs.readFile('../0x05-Node_JS_basic/database.csv', 'utf-8', (err, data) => {
    // console.log(data);
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});