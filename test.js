const fs = require('fs');

fs.writeFile('a.txt', 'this test', err => {
  fs.readFile('a.txt', (err, data) => {
    if (err) console.log(err);
    else console.log(data.toString());
  });
});
