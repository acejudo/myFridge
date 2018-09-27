var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  title: String,
  description: String,
  units: { type: Number },
  created: { type: Date}, 
  expiration: { type: Date},
  updated: { type: Date, default: Date.now },
  consumeBefore: {type: Date}
});

var Food = mongoose.model("Food", FoodSchema);
module.exports = Food;