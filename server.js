import express from "express"

const app=express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get("/",(req,res)=>{

    res.render("client.ejs");
})

app.post("/timezone",(req,res)=>{

    console.log(req.body);
    res.send("ok")
})

app.listen("3000",()=>{
    console.log("Server Connected on Port 3000")
})