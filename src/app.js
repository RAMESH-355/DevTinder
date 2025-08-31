const express = require("express");

const app = express(); 

app.use("/",(req,res) => {
    res.send("Namaste Ramesh");
});

app.use("/test",(req,res) => {
    res.send("Namaste Ramesh");
});

app.use("/test2",(req,res) => {
    res.send("Namaste Ramesh");
});

app.use("/test3",(req,res) => {
    res.send("Namaste Ramesh");
});

app.use("/test4",(req,res) => {
    res.send("Namaste Ramesh");
});

app.listen(5123,() => {
    console.log("Server sent an request, successfully!");
});
