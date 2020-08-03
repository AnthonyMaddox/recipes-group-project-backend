const mongoose = require("../db/connection");

const Schema = mongoose.Schema;

const Recipe = new Schema({
  title: String,
  description: String,
  // need to figure out how ingredients will be entered and displayed
  //user enters ingredients seperated by comma, then we'll use the split method to split the contents of the string at each comma using the comma seperator
  ingredients: [],
  instructions: String,
  picture: String,
});

module.exports = mongoose.model("Recipe", Recipe);