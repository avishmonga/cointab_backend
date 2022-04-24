const app = require("./index");
const connect = require("./config/db");
require("dotenv").config()
let PORT = process.env.PORT || 2345
app.listen(PORT, async () => {
  try {
    await connect();

    console.log("running on 2345");
  } catch (err) {
    console.log("err", err);
  }
});
