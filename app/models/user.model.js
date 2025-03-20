import mongoose from "mongoose";
var userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

var User = mongoose.model("User", userSchema);

export default User;
