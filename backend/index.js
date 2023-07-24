const dotenv = require('dotenv')
const mongoose = require("mongoose")
const express = require("express");
const cors = require("cors");
const router = require("./routes/PeopleData");

dotenv.config({path:'./config.env'})

const DB = process.env.DB

const port =process.env.PORT 

mongoose.connect(DB).then(()=>{
    app.listen(port, () => console.log(`server is running ${port}`));

    console.log('DB connection succes');
}).catch((err)=>{ console.log('DB connection failed');})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:'http://localhost:3000'}));

app.use('/', router);

app.get('/',(req,res)=>{
    res.send('hello user')
})