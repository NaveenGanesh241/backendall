const express = require('express')
const mongoose = require('mongoose')
const userroutes = require('./routes/user.routes');
const todoroutes = require('./routes/todo.routes');
const storeroutes = require('./routes/store.routes');
const menuroutes = require('./routes/menu.routes');
const foodroutes= require('./routes/food.routes')

const cors = require('cors')
const axios = require('axios');

const app = express()
app.use(express.json())


const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 
  }

app.use(cors(corsOptions))

app.use('/employ',userroutes)
app.use('/todo',todoroutes)
app.use('/store',storeroutes)
app.use('/hotel',menuroutes)
app.use('/food',foodroutes)


// app.post('/queryexample',(req,res)=>{
//     const username = req.query.username
//     const {userName:username,password}=req.query
//     res.json
//     (
//         {
//             //spread operator
//             //createdat:"date",
//             //from:"node server",
//             //...req.query,
//             //username:"user1"
//             //username,
//             //password
//         }
//     )
 

// })
// app.post('/paramsexample/:username/:password',(req,res)=>{
//     //const username=req.params.username
//     res.json(req.params)
// })

// app.post('/bodyexample',(req,res)=>{
//     //const username=req.params.username
//     res.json(req.body)
// })

// app.post('/weather',(req,res)=>{
//     let lat=req.query.lat
//     let lon=req.query.lon
//     //let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1040286cb56aefd2800de0a7f1aa9f0e`

//     let config = {
//         method: 'get',
//         maxBodyLength: Infinity,
//         url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1040286cb56aefd2800de0a7f1aa9f0e`,
//         headers: { }
//       };
      
//       axios(config)
//       .then((response) => {
//         console.log(JSON.stringify(response.data));
//         res.json({
//             temp:response.data.main.temp-273.15,
//             weather:response.data.weather[0].main
//         })
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     })





app.listen(5000,()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/work').then
    (()=>{
        console.log("connected  successfully");
    }).catch(err=>{
        console.log("failed to connect",err.message);
    })
    console.log('this api is running on port 5000');


})


