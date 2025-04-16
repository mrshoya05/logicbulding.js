const express = require('express');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT

const sequelize = require('./config/db')



app.listen(PORT, ()=>{
    console.log(`server is running successfully ${PORT}`);
    
})