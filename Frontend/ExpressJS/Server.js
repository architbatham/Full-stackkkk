import express from "express";

const app = express();

var urlRout = "<h2>Click bellow link to redirect</h2> <a href='/'>Home</a><br><br> <a href='/about'>About</a><br><br><a href='/contact'>Contact</a><br><br><a href='/service'>Service</a><br><br><a href='/register'>Register</a><br><br> <a href='/login'>Login</a><br><br>"

app.get("/",(req,res)=>{
    res.send("<h1>Home</h1>"+urlRout);
});

app.get("/about",(req,res)=>{
    res.send("<h1>About</h1>"+urlRout);
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact</h1>"+urlRout);
});

app.get("/service",(req,res)=>{
    res.send("<h1>Service</h1>"+urlRout);
});

app.get("/register",(req,res)=>{
    res.send("<h1>Register</h1>"+urlRout);
});

app.get("/login",(req,res)=>{
    res.send("<h1>Login</h1>"+urlRout);
});
app.listen(3000);
console.log("Server invoked http://localhost:3000");
