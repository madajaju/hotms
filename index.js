const fs = require('fs');
// Check for node_modules directory. If it exists then continue. If not ask to run npm install.
if(!fs.existsSync('./node_modules')) {
   console.error('Error: you must run "npm install" first');
   return;
}
const server = require('ailtire');

let host = process.env.AITIRE_HOST || 'localhost'
let port = process.env.AITIRE_PORT || 3000
let urlPrefix = process.env.AITIRE_BASEURL || '/web'

server.listen( {
    baseDir: '.',
    prefix: 'hotms',
    routes: { },
    listenPort: port,
    host: host,
    urlPrefix: urlPrefix
});
