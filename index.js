const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');


const index = express();
index.use(cors());

const port = process.env.PORT || 3001;
const AdduserModal = require("./module");

index.get('/', (req, res) => {
  AdduserModal.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error.message); // Respond with error message
    });
});

mongoose.connect("mongodb+srv://zaindiv:Zain007abd@cluster0.32r5dqe.mongodb.net/all-data?retryWrites=true&w=majority", {
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
