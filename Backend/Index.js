const express = require('express');
const app  = express();
const port = 3000;

const userRouter =require('./Routers/User');
const productRouter = require('./Routers/Product');

//middleware for this mongodb is use
app.use(express.json());
app.use('/User',userRouter);
app.use('/Product',productRouter);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});
