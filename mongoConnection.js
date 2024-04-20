const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://ananya:ananya123@cluster0.fgulaw7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connection to MongoDB successfull")
}).catch((e)=>{
    console.log(`error is ${e}`)
})