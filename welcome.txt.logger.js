require('fs').readFile('welcome.txt', 'utf8', (err, txt) => console.log(err || txt))
