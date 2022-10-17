// 3rd Party Modules
const express = require('express');
const asyncify = require('express-asyncify');
require('dotenv/config');

const app = asyncify(express());
const PORT = 8000;

app.use(express.json());

const index = require('./routes/index');
const bootNotification = require('./routes/BootNotification'); 

app.use('/', index); 
app.use('/boot', bootNotification); 

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

module.exports = app;