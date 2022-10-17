// 3rd Party Modules
const express = require('express');
require('dotenv/config');

const app = express();
const PORT = 8000;

app.use(express.json());

app.use('/', './routes/index'); 
app.use('/boot', './routes/BootNotification'); 

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

module.exports = app;