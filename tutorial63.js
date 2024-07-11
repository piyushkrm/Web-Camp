// console.log("Today we learn about NODE.js")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="tutorial48.js"></script>
      <title>Variables in JavaScript</title>
  
  </head>
  <body>
      <div class="container">
          <h1>This is a heading</h1>
          <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda non ab sint necessitatibus aperiam aliquid, eos voluptatem quia similique omnis. Fuga eos cumque reiciendis laborum itaque saepe quas quibusdam alias, veniam asperiores maxime veritatis magni corporis, unde totam! Magnam aut dignissimos magni! Voluptatum reiciendis laborum velit. Quidem corporis fugiat voluptates.</p>
          </div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});