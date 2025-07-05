const mongoose = require("mongoose");
const db_name = "new_database";
const connectionString = `mongodb://localhost:27017/${db_name}`;
//connect to db
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("successfully connected !");
  })
  .catch((err) => {
    console.log(err);
  });
// schema & model

const adminSchema = mongoose.Schema({
    name:{type:String},
    age:{type:Number}
})

// model(collection)
const adminModel = mongoose.model('admin',adminSchema)
const updater = async (id)=>{

 await adminModel.updateMany({name:'jagdeep sir'},{$set:{age:15}})
  .then(()=>{
    console.log('data update')
  })
}
const id = '685d5dfe985b30516105d477'
updater(id)
  

/*

// Ek user ka age update karo
User.updateOne({ name: 'Rahul' }, { $set: { age: 26 } })
  .then(result => console.log("Updated:", result));

// Multiple update
User.updateMany({ age: { $lt: 25 } }, { $set: { status: "junior" } })
  .then(result => console.log(result));
// by the help of id

User.findByIdAndUpdate("665a190d1a0c9bcb80d10e34", { $set: { age: 28 } });
                            id                               update data
*/