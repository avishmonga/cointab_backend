const app = require("./index");
const connect = require("./config/db");
app.listen(2345, async () => {
  try {
    await connect();

    console.log("running on 2345");
  } catch (err) {
    console.log("err", err);
  }
});
