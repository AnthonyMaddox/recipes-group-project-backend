const mongoose = require("../db/connection");

const Schema = mongoose.Schema;


const Ingredient = new Schema({
   ingredient: String,
   amount: String
 });
const Recipe = new Schema({
  title: String,
  description: String,
  ingredients: [Ingredient],
  instructions: String,
  picture: String,
  cook: String
});

module.exports = mongoose.model("Recipe", Recipe);
