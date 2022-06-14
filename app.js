const express = require("express");
const PORT = 3000;
const app = require("express")();
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./twenty.db');

app.get('/',(req,res)=>{
    return res.render('index.ejs');
})

app.get('/first',(req,res)=>{
    return res.render('first.ejs');
})
app.get('/second',(req,res)=>{
    return res.render('second.ejs')
})
app.get('/submitosnamenos',(req,res)=>{
    db.run(`INSERT INTO users(name,body,spatne) VALUES('${req.query.name}','${req.query.score1}','${req.query.score2}')`,(err)=>{
        if(err){console.error(err.message)};
    });
    return res.redirect('/')
});


app.listen(PORT,()=>{console.log("yes")});