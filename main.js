const express=require("express")
const cors = require('cors');
const app=express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/app/api",require("./service/route"))
// app.get("/",(req,res)=>res.json({message:"hello"}))
var port=process.env.PORT || 5000
app.listen(port,function(){
  console.log("sever running in port: ",port);
})