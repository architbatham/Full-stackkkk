import express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("<h1>Home url invoked , Admin panel</h1>")
});

router.get('/manageuser',(req,res)=>{
    res.send("<h1>Manage users Url invoked</h1>")
});

router.get('/addcategory',(req,res)=>{
    res.send("<h1>Add category</h1>")
});

router.get('/addsubcategory',(req,res)=>{
    res.send("<h1>Add sub Category</h1>")
});

router.get('/epadmin',(req,res)=>{
    res.send("<h1>Edit profile admin</h1>")
});

router.get('/cpadmin',(req,res)=>{
    res.send("<h1>Change password</h1>")
});



export default router;
