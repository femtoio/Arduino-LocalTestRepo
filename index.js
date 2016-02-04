var connect = require('connect'),
    serveStatic = require('serve-static')
    directory = __dirname,
    port = 8080;

connect()
  .use(serveStatic(directory))
  .listen(port);

console.log('Listening on port ' + port);