const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const models = mongoose.models;

const invoiceSchema = new Schema({
  name: String,
  addres: String,
  phone: String,
});

const invoiceModal = models.invoce || mongoose.model('invoce', invoiceSchema);

module.exports = invoiceModal;

