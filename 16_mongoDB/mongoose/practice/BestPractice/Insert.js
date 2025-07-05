const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const database = "new_database";
const url = `mongodb://localhost:27017/${database}`;

mongoose
  .connect(url)
  .then(() => {
    console.log("db is connected !");
  })
  .catch((err) => {
    console.log(err);
  });

//schema

const adminSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 10, required: true },
  userName: { type: String, required: true },
});
//create model
const adminModel = mongoose.model("admin", adminSchema);

// insert single data with async mode
const insertData = async () => {
  const admin_1 = new adminModel({
    name: "anita bharti",
    age: 26,
    userName: "anita",
  });
  const admin_2 = new adminModel({
    name: "sikha kumari",
    age: 26,
    userName: "sikha",
  });
  const admin_3 = new adminModel({
    name: "amit sharma",
    age: 26,
    userName: "amit",
  });
  const admin_4 = new adminModel({
    name: "jagdeep sir",
    age: 16,
    userName: "jagdeep",
  });
 
  //  await newAdmin.save().then(()=>{
  //   console.log('data saved')
  //  })

    await adminModel.insertMany([admin_1,admin_2,admin_3,admin_4]).then(()=>{
  console.log("data inserted !")
 })
};

insertData();


