var express = require('express');
var userRouter = require('./routes/users');
require("./mongoConnection");


var app = express();
const cors=require("cors");
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",userRouter);

app.listen(5000, ()=>{
  console.log("Server listening",5000);
})

app.get('/', function(req, res, next) {
  res.send('API is running');
});

module.exports = app;
