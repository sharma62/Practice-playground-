const mongoose = require("mongoose");

const db_name = "new_database";
const connectionString = `mongodb://localhost:27017/${db_name}`;

//connect to db
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connected !");
  })
  .catch((err) => {
    console.log(err);
  });
// define schema & model
const usersSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
});

const usersModel = mongoose.model("users", usersSchema);

// use async
const findData = async ()=>{
  await usersModel.find({age:{$gt:25}}).then((user) => {
    console.log(user);
  });
}
findData()
/*
// Sabhi users read
User.find()
  .then(users => console.log(users));

// Condition ke saath
User.find({ age: { $gt: 24 } })   // age > 24
  .then(users => console.log(users));

// Sirf ek user
User.findOne({ name: 'Rahul' })
  .then(user => console.log(user));

*/