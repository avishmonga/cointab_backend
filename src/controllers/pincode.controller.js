const express = require("express");

const router = express.Router();
const Pincode = require("../models/pincode.model");
const Courior = require("../models/courior_rates.model");

function round(num) {
    let floor = Math.floor(num);
    let val = num.toFixed(1) - floor;
    val = val.toFixed(1);
    if (val <= 0.5) {
      num = (floor + 0.5);
    } else {
      num = (floor + 1);
    }
    return num
  }

router.get("/", async (req, res) => {
  try {
    const pincodes = await Pincode.find().lean().exec();
    res.status(200).send(pincodes);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);

    let weight = req.body.weight;
    // weight = weight.toFixed(2)
    //  weight = Math.round((weight*10)/10)
    

    weight  = round(weight);

    let pincode = await Pincode.findOne({
      Customer_Pincode: req.body.Customer_Pincode,
    })
      .lean()
      .exec();
    if (!pincode) {
      return res.status(404).send("Pincode Not Found");
    }
    let zone = pincode.Zone;

    let courior_rate = await Courior.findOne({
      Rate_Type: req.body.Rate_Type,
      Zone: zone,
    });

    let price = 0

    if(weight <=0.5){
        price = courior_rate.First_KG
    }else{
        price = courior_rate.First_KG + ((weight - 0.5 )* (courior_rate.Every_Additional*2))
    }



    return res.status(200).send({price})




    
  } catch (err) {

  }
});

module.exports = router;
