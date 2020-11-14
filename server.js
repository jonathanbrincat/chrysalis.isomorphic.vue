const path = require('path');
const express = require('express');

const { createSSRApp } = require('vue');
const { renderToString } = require('@vue/server-renderer');
const manifest = require('./dist/ssr-manifest.json');

const App = require( path.join(__dirname, './dist', manifest['app.js']) ).default;

const server = express();

server.get('*', async (request, response) => {
  const app = createSSRApp(App);
  const appRenderer = await renderToString(app);

  const html = `
  <html>
    <head>
      <title>Hello</title>
    </head>
    <body>
      <h1>Hello from server</h1>
      ${appRenderer}
    </body>
  </html>
  `;

  response.end(html);
});

console.log(`
  You can navigate to http://localhost:8080
`);

server.listen(8080);
