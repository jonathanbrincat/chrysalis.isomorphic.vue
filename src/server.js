const path = require("path");
const express = require("express");

const server = express();

server.get("*", async (request, response) => {
  const html = `
  <html>
    <head>
      <title>Hello</title>
    </head>
    <body>
      <h1>Hello</h1>
    </body>
  </html>
  `;

  response.end(html);
});

console.log(`
  You can navigate to http://localhost:8080
`);

server.listen(8080);
