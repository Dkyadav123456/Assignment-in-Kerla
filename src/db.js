const mongoose = require("mongoose");
const mongooseUri =
  "mongodb+srv://Dharmendra:dkyadav123@cluster0.kq9bu.mongodb.net/Shopping-Cart";
const connectToMongo = () => {
  mongoose
    .connect(mongooseUri, {
      useNewUrlParser: true,
    })
    .then(() => console.log("mongoDB is connected"))
    .catch((error) => console.log(error));
};
module.exports = connectToMongo;
