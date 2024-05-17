const express = require("express")

const index = express()

const mongoose = require("mongoose")

const port = 3001 || process.env.PORT
const AdduserModal = require("./module")

index.get('/', (req, res) => {

  AdduserModal.find()
      .then((result) => {
        res.json(result);


      })
      .catch((error) => {

      });
});

mongoose.connect("mongodb+srv://zaindiv:Zain007abd@cluster0.32r5dqe.mongodb.net/all-data?retryWrites=true&w=majority")
    .then(() => {
      index.listen(port, () => {
            console.log(`http://localhost:${port}/`)
        })
    })
    .catch(() => {


    })
