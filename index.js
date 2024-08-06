const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
const dotenv = require('dotenv');

dotenv.config();

const index = express();
index.use(cors());

const port = process.env.PORT || 3001;
const AdduserModal = require("./models/module");
const ArrCustomerModal = require("./models/ArrCustomerModal");
const InvoiceModal = require("./models/invoiceModel");
const UserModal = require("./models/UserModal");

index.get('/', (req, res) => {
  AdduserModal.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error.message); // Respond with error message
    });
});

index.get('/invoice', (req, res) => {
  InvoiceModal.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error.message); // Respond with error message
    });
});

index.get('/userinvoice', (req, res) => {
  UserModal.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error.message); // Respond with error message
    });
});

index.get('/invoice/:id', (req, res) => {
  InvoiceModal.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error.message); // Respond with error message
    });
});

index.get('/customer/:id', (req, res) => {
  ArrCustomerModal.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error.message); // Respond with error message
    });
});


index.put('/invoicee/:id', (req, res) => {
  InvoiceModal.findByIdAndUpdate(req.params.id, req.body)
  .then(() =>{
    console.log("sdw******************************desd")
      res.redirect("/");
  })
  .catch((err) =>{
      console.log(err)
  })
  console.log(req.body)
});



mongoose.connect(process.env.MONGO_LINK, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Adjust the timeout as needed
  socketTimeoutMS: 45000, // Adjust the timeout as needed
})
  .then(() => {
    index.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error); // Log error to the console
  });
