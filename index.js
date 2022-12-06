const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const host = "0.0.0.0";
const data = require("./models/db.js");
const path = require("path");
const file = __dirname + path.join("/public/index.html");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
const dbUrl = "mongodb+srv://server:server@cluster0.eieopuc.mongodb.net/?retryWrites=true&w=majority";
const connectionParams  = {
    useNewUrlParser : true,
    useUnifiedTopology  : true,
    // useCreateIndex : true,
    // useFindAndModify : false

}
app.get("/", (req,res) => {
    res.sendFile(file);
})
app.post("/",(req,res) => {
    res.send("Your message has sent to Aman Panchal successfully, Thank you.");
    var x = req.body.name ;
    var y = req.body.text;

    var Data = new data();
    Data.name = x;
    Data.text = y;
    Data.save((err,data) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Data is saved Succesfully");
        }
    })

})
mongoose.connect(dbUrl,connectionParams).then(() =>{
    console.log("Connected to monogoose successfully");

}).catch((e) => {
    console.log("The errror is : ",e);
})
app.listen(port,host, () => {
    console.log("App is running successfully");
})
