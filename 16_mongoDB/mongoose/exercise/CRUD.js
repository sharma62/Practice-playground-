const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Types;
const db_name = "PRODUCT";
mongoose
  .connect(`mongodb://localhost:27017/${db_name}`)
  .then(() => {
    console.log("connection establish");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  adds: { type: String },
  contact: { type: String },
});

const productModel = mongoose.model("product", productSchema);

const create_or_insert = async () => {
  try {
    const item1 = new productModel({
      name: "kumar",
      age: 24,
      adds: "patna, bihar",
      contact: "9934656845",
    });
    const item2 = new productModel({
      name: "sharma",
      age: 33,
      adds: "patna, bihar",
      contact: "123456789",
    });
    const item3 = new productModel({
      name: "rohit sir",
      age: 33,
      adds: "goa, india",
      contact: "11445566223",
    });
    await productModel.insertMany([item1, item2, item3]).then(() => {
      console.log("data Inserted");
    });
  } catch (error) {
    console.log(err);
  }
};

const read = async () => {
  await productModel.find().then((field) => {
    console.log(field);
  });
};

const update = async (id, field, val) => {
  // ❌ { field: val } likhne se key string "field" ban jaata hai.
  // {[field]: val }          // dynamic key using []

  productModel
    .find({ _id: new ObjectId(id) }, { _id: 0 })
    .then((documents) => {
      //add validatoin:  main ek check add karna chahta hu ki id exist kare tab hi ye niche wala block run kare
      if (documents.length > 0) {
        console.log("we are procceding to update. . . . ");
        productModel
          .findByIdAndUpdate(id, { $set: { [field]: val } }, { new: true })
          .then(() => {
            console.log("Document updated !");
          });
      } else {
        console.log("❗ No document found with given ID.");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const delete_data = async (id) => {
  productModel
    .find({ _id: new ObjectId(id) }, { _id: 1 })
    .then((documents) => {
      if (documents.length > 0) {
         productModel.findByIdAndDelete(id)
          .then(()=>{
            console.log('Document Deleted !')
          })
      } else {
        console.log("❗ No document found with given ID.");
      }
    })
    .catch((err) => {
      console.log(err);
    });

};
// ------------------------------------------------------------------------------------------------

const id = "68612f00013ad49ffbbf2922";
// create_or_insert();
// read();

update(id, "age", 124);
// delete_data(id);
