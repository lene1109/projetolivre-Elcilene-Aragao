const exress = require("express")
const app = express()

app.get("/", function(res,req){
    res.send("WORKING!");
});
app.listenprocess.env.PORTA || (8000);