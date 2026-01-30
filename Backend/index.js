// ทำการimport โมดู http
const { count } = require('console');
const http = require('http');
const host = 'localhost';
const port = 8000;

// กำหนดค่า

const reqestListener = function(req , res ){
    res.writeHead(200);
    res.end('Hello.World! this is my first server.')
}
// runserver 

const server = http.createServer(reqestListener);
server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`)
})
