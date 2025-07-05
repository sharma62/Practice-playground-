// require for express
const express = require("express");
const app = express();
// for mongoose
const mongoose = require("mongoose");
// for dataType Converstion
const { ObjectId } = require("mongoose").Types;
//db name
const db_name = "PRODUCT";
// connection
mongoose
  .connect(`mongodb://localhost:27017/${db_name}`)
  .then(() => {
    console.log("connection establish");
  })
  .catch((err) => {
    console.log(err);
  });
// schema and validation
const productSchema = new mongoose.Schema({
  name: { type: String, require: true, minlength: 5 },
  price: {
    type: Number,
    validate: {
      validator: function (amount) {
       return amount >=100
      },
      massage:"price shuld be graatter then 100 "
    },
  },
  adds: { type: String, minlength: 5, maxlength: 15 },
  contact: { type: String, maxlength: 15, minlength: 1 },
});
// collection or says model
const productModel = mongoose.model("product", productSchema);
//operation
const create_or_insert = async () => {
  try {
    const item1 = new productModel({
      name: "anup kumar",
      price: 120,
      adds: "patna, bihar",
      contact: "9934656845",
    });
    const item2 = new productModel({
      name: "jiji sharma",
      price: 133,
      adds: "patna, bihar",
      contact: "123456789",
    });
    const item3 = new productModel({
      name: "anil sir",
      price: 31,
      adds: "goa, india",
      contact: "11445566223",
    });
    await productModel
      .insertMany([item1, item2, item3])
      .then(() => {
        console.log("data Inserted");
      })
      .catch((err) => {
        console.log("Validation Error:", err.message,"//");
      });
  } catch (err) {
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
        productModel.findByIdAndDelete(id).then(() => {
          console.log("Document Deleted !");
        });
      } else {
        console.log("❗ No document found with given ID.");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
// ------------------------------for static------------------------------------------------------------------

// const id = "68612f00013ad49ffbbf2922";
// create_or_insert();
// read();

// update(id, "age", 124);
// delete_data(id);
// -------------------------------dynamic via hit the url--------------------------------------------------------------------
app.get("/", (req, res) => {
  try {
    read();
    res.send("home");
  } catch (err) {
    res.status(400).send(err);
  }
});
app.get("/product", (req, res) => {
  try {
    read();
    res.send("read");
  } catch (err) {
    res.status(400).send(err);
  }
});
app.post("/product", (req, res) => {
  try {
    create_or_insert();
    res.send("create");
  } catch (err) {
    res.status(400).send(err);
  }
});
app.put("/product/:id/:field/:value", (req, res) => {
  try {
    let { id, field, value } = req.params;
    update(id, field, value);
    res.send("update");
  } catch (err) {
    res.status(400).send(err);
  }
});
app.delete("/product/:id", (req, res) => {
  try {
    let id = req.params.id;
    delete id;
    res.send("update");
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(3000, () => {
  console.log("server start");
});
