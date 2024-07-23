import express from "express";
const app = express();


//to load ulr routers
import IndexRouter from './router/index.router.js';
import AdminRouter from './router/admin.router.js';

// rout level middleware
app.use('/',IndexRouter);
app.use('/admin',AdminRouter);

app.listen(3000);
console.log("Server invoked on http://localhost:3000")

