import express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("<h1>Home url invoked , Visitor panel</h1>")
});

router.get('/about',(req,res)=>{
    res.send("<h1>About url invoked</h1>")
});

router.get('/Conatct',(req,res)=>{
    res.send("<h1>Contact url invoked</h1>")
});

router.get('/Service',(req,res)=>{
    res.send("<h1>Service url invoked</h1>")
});

router.get('/Register',(req,res)=>{
    res.send("<h1>TRegister url invoked</h1>")
});

router.get('/Login',(req,res)=>{
    res.send("<h1>Login url invoked</h1>")
});



export default router;
