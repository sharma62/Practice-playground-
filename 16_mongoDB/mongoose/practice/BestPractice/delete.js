const mongoose = require("mongoose");

const db_name = "new_database";
mongoose
  .connect(`mongodb://localhost:27017/${db_name}`)
  .then(() => {
    console.log("connected !");
  })
  .catch((err) => {
    console.log(err);
  });

const adminSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
});

const adminsModel = new mongoose.model("admins", adminSchema);
const deleter = async () => {
  await adminsModel.deleteOne({ _id: "685d5dfe985b30516105d477" }).then(() => {
    console.log("data sucessfully deleted");
  });
};

deleter();
