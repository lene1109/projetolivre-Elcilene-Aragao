const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("WORKING!");
});
app.listen(process.env.PORTA || 5000);