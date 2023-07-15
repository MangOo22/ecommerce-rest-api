const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.set("strictQuery", true);

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then((conn) => {
      console.log(`Database Connected: ${conn.connection.host}`);
    })
    // .catch((err) => {
    //   console.error(`Database Error: ${err}`);
    //   process.exit(1);
    // }); 
};
module.exports = dbConnection;
