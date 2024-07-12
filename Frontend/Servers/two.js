import http from 'http';

http.createServer((req,res)=>{

    var msg="";
    if(req.url=="/" || req.url=="home")
    msg="<h1>/or/home url invoke</h1>";

    else if(req.url=="/about")
    msg="<h1>about url invoke</h1>";

    else if(req.url=="/contact")
    msg="<h1>contact url invoke</h1>";

    else if(req.url=="/service")
    msg="<h1>service url invoke</h1>";

    else if(req.url=="/register")
    msg="<h1>register url invoke</h1>";

    else if(req.url=="/login")
    msg="<h1>login url invoke</h1>";

    else 
    msg="<h1> Invalid </h1>";
    res.write(msg);
    res.end();
}).listen(8081);

console.log("http://localhost:8081");