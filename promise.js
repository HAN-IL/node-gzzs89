// new Promise(resolve => {
//   resolve(10);
// })
//   .then(val => {
//     console.log(val);
//     return 20;
//   })
//   .then(val => {
//     console.log(val);
//   });

const fs = require('fs');
// fs.readFile('a.txt', (err, data) => {
//   console.log(data.toString());
// });

read('a.txt')
  .then(val => {
    console.log(val);
    return read('a.txt');
  })
  .then(val1 => {
    console.log(val1);
  });

function read(fn) {
  return new Promise(resolve => {
    // err,
    fs.readFile(fn, (err, data) => {
      resolve(data.toString());
    });
  });
}

