const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const models = mongoose.models;

const customerSchema = new mongoose.Schema({
  customer: [
    {
      name: String,
      addres: String,
      phone: String,
      arrinvoce: Array,
    },
  ],
});

const InvoiceCustomerArr =
  models.customerinvoice || mongoose.model("customerinvoice", customerSchema);

module.exports = InvoiceCustomerArr;
