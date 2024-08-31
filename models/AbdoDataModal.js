const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const models = mongoose.models;

const dataSchema = new Schema({
  expen: Array,
});

const AbdoDataModal = models.expense || mongoose.model('expense', dataSchema);

module.exports = AbdoDataModal;

