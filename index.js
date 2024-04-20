var express = require('express');
const cors=require("cors");
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }
app.use(cors(corsOptions));

var cookieParser = require('cookie-parser');
require("./mongoConnection");

var userRouter = require('./routes/users');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/",userRouter);

app.listen(5000, ()=>{
  console.log("Server listening",5000);
})

app.get('/', function(req, res, next) {
  res.send('API is running');
});

module.exports = app;
