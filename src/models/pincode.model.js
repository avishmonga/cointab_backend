const mongoose = require("mongoose");

const Pincode = new mongoose.Schema(
  {
    Customer_Pincode: {
      required: true,
      type: Number,
      maxlength: 8,
      minlength: 8,
    },
    Zone: { required: true, type: String, maxlength: 1 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = new mongoose.model("pincodes", Pincode);
