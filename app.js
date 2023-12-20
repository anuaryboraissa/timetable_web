const express=require("express")

const app=express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/app/api",require("./service/route"))
var port=process.env.port || 5000
app.listen(port,function(){
  console.log("sever running in port: ",port);
})