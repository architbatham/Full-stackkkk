import http from 'http';

http.createServer((req,res)=>{
    
    res.end();
}).listen(8081);
console.log("Server start at link http://localhost:5000");