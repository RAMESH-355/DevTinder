const express = require("express");

const app = express();

app.use("/user", (req,res) => {
    res.send("Namaste Ramesh");
});

app.get("/user",(req,res) => {
    res.send({firstName: "valle",
                lastName: "Ramesh"
    });
});

app.post("/user",(req,res) => {
    res.send("Added successfylly");
});

app.delete("/user",(req,res) => {
    res.send("Deleted successfully");
});

app.listen(5123,() => {
    console.log("Server sent an request, successfully!");
});
