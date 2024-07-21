const express = require('express')
const app = express();

app.use((req,res, next)=>{
    console.log("middle wher 1");
next();

});

app.get('/',(req,res)=>{
res.send('Hello');
console.log("middle wher 1");
});

app.get('/about',(req,res)=>{
    res.send('about page');
});

app.get('/contact/:username',(req,res)=>{
    res.send(`hello from ${req.params.username}`);
});

console.log("Server invoked on http://localhost:3000/")
app.listen(3000);