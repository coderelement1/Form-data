const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    name  : {
        type : String,
        required : true
    },
    text : {
        type : String,
    
    }
})
const DataSchema = mongoose.model("Data", dataSchema);
module.exports = DataSchema;