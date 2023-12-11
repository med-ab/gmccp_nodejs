require('http')
  .createServer((req, res) =>
    res.writeHead(200, { 'content-type': 'text/html' })
      .end('<h1>Hello Node!!!!</h1>\n')
  ).listen(3000, () => console.log('serving at http://localhost:3000'))
