// 3rd Party Modules
const express = require('express');
require('dotenv/config');
const index = require('./routes/index.js');

const app = express();
const PORT = 8000;

app.use(express.json());

app.use('/', index); 

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);