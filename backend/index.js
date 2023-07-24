const mongoose = require("mongoose")
const express = require("express");
const cors = require("cors");
const router = require("./routes/PeopleData");

const DB= 'mongodb+srv://akks:12345qwerty@cluster0.xqyjvcp.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
    console.log('DB connection succes');
}).catch((err)=>{ console.log('DB connection failed');})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:'http://localhost:3000'}));

app.use('/', router);

//get all people details

const peopleData=mongoose.model('churchdata',{
    
    id:Number,
    ward:Number,
    first_name:String,
    last_name:String,
    email:String,
    phone:String
    })

const allpeopleData = () => {
    return peopleData.find().then((result) => {
      if (result) {
        return {
          statusCode: 200,
          users: result,
        };
      } else {
        return {
          statusCode: 404,
          message: "data not available",
        };
      }
    });
  };

  app.get('/getpeopledata',(req,res)=>{
    allpeopleData().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

const port = 5000;

app.listen(port, () => console.log(`server is running ${port}`));


