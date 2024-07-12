import http from 'http';
import url from 'url'

var urlRouting = "<h2>Click the link bellow</h2> <a href='/home'>Home page</a><br><br> <a href='/about'>About page</a><br><br> <a href='/contact'>Contact page</a><br><br> <a href='/service'>Service page</a><br><br><a href='/register'>Register page</a><br><br><a href='/login'>Login page</a>"

http.createServer((req,res)=>{
    var urlobj=url.parse(req.url,true);
    console.log(urlobj);

   var msg="";
   if(urlobj.pathname=="/" || urlobj.pathname=="/home") 
    msg="<h1>Home page</h1>";
   
   else if(urlobj.pathname=="/about")
    msg="<h1>About</h1>";

   else if(urlobj.pathname=="/contact")
    msg="<h1>Contact</h1>";

   else if(urlobj.pathname=="/service")
    msg="<h1>aService</h1>";

   else if(urlobj.pathname=="/register")
    msg="<h1>Register</h1>";

   else if(urlobj.pathname=="/login")
    {
        var userDetail=urlobj.query;
        console.log("username" + userDetail.username);
        console.log("password" + userDetail.password);

    msg="<h1>Login</h1>";
    }
   else 
    msg="<h1>Error 404</h1>";

    res.write(msg+urlRouting);

    res.end();
}).listen(8081);

console.log("server envoke on:- http://localhost:8081");
