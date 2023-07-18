const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  switch (url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to my Node Js project');
      break;
    case '/home':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome home');
      break;
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to About Us page');
      break;
    default:
      res.writeHead(404);
      res.end('Not found');
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
