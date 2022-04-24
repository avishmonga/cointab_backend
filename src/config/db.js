const mongoose = require("mongoose")

module.exports = ()=>{
   return mongoose.connect("mongodb+srv://Avish:XWuQfdBAvHPDUXIW@cluster0.ahjtx.mongodb.net/cointab")
}