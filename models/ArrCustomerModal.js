const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const models = mongoose.models;

const invoiceSchema = new Schema({
  customers: [Object],
});

const invoiceModal = models.invoicecustomer || mongoose.model('invoicecustomer', invoiceSchema);

module.exports = invoiceModal;

