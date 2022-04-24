const mongoose = require("mongoose");

const Courior = new mongoose.Schema({
  Rate_Type: {
    type: String,
    enum: ["Forward", "Forward & RTO"],
    required: true,
  },
  Zone: { required: true, type: String, maxlength: 1 },
  First_KG: { required: true, type: Number },
  Every_Additional: { required: true, type: Number },
});

module.exports = new mongoose.model("courior_rates", Courior);
