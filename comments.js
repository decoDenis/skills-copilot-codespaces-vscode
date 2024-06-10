// Create web server that responds to GET requests to /comments
// with a JSON object that looks like this:
// {
//   "comments": [
//     {
//       "username": "Todd",
//       "comment": "I love JS!"
//     },
//     {
//       "username": "Jane",
//       "comment": "I love HTML!"
//     }
//   ]
// }

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      comments: [
        {
          username: 'Todd',
          comment: 'I love JS!',
        },
        {
          username: 'Jane',
          comment: 'I love HTML!',
        },
      ],
    }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
