require('fs').readFile('hello.txt', 'utf8', (err, txt) => console.log(err || txt))
