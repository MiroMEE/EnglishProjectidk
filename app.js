const express = require("express");
const PORT = 3000;
const app = require("express")();
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));



app.get('/',(req,res)=>{
    return res.render('index.ejs');
})

app.get('/first',(req,res)=>{
    return res.render('first.ejs');
})
app.get('/second',(req,res)=>{
    return res.render('second.ejs')
})

app.listen(PORT,()=>{console.log("yes")});