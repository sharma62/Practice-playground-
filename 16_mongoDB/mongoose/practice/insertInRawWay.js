// Pehle mongoose import kar lo
const mongoose = require("mongoose");

// MongoDB ke saath connect
mongoose.connect("mongodb://localhost:27017/new_database");

// Schema define kar rahe hain
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 18 },
});

// Model banate hain
const User = mongoose.model("User", userSchema);

// Naya User insert karna
const newUser = new User({ name: "Rahul", age: 25 });
newUser.save().then(() => console.log("User saved!"));
