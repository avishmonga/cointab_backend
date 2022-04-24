const express = require("express")

const app = express()
const pincodeController = require("./controllers/pincode.controller")

app.use(express.json())

app.use("/pincode", pincodeController)




module.exports = app