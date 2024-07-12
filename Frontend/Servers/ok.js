import http from 'http';

http.createServer((req,res)=>{
    res.write("<h1>Wlecome to node server</h1>")
    res.end();
}).listen(8081);

console.log("Server invoke at  link:- http://localhost:8081");