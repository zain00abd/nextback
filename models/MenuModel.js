const mongoose = require("mongoose");
 const Schema = mongoose.Schema;
 const models = mongoose.models;

 // define the Schema (the structure of the article)
 const productSchema = new Schema({
   name: String,
   price: Number,
   image: String,
   description: String,

 });

 // Create a model based on that schema
 const DataMenuModal = models.product || mongoose.model("product", productSchema);

 // export the model
 module.exports = DataMenuModal;