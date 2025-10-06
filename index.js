const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
const dotenv = require("dotenv");

dotenv.config();

const index = express();
index.use(cors());

const port = process.env.PORT || 3001;
const AdduserModal = require("./models/module");
const ArrCustomerModal = require("./models/ArrCustomerModal");
const InvoiceCustomerArr = require("./models/InvoiceCustomerArr");
const InvoiceModal = require("./models/invoiceModel");
const UserModal = require("./models/UserModal");
const AbdoDataModal = require("./models/AbdoDataModal");
const UserAbdoModal = require("./models/UserAbdoModal");
const MenuModal = require("./models/MenuModel");
index.get("/", (req, res) => {
  AdduserModal.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error.message); // Respond with error message
    });
});

index.get("/invoice", (req, res) => {
  InvoiceModal.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error.message); // Respond with error message
    });
});



index.get("/userinvoice", (req, res) => {
  UserModal.find()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).send(error.message); // Respond with error message
  });
});


index.get("/datamenu", (req, res) => {
  MenuModal.find()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).send(error.message); // Respond with error message
  });
});




// abdo project ********=====******** START**
index.get("/abdodata", (req, res) => {
  AbdoDataModal.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});


index.get("/abdouser", (req, res) => {
  UserAbdoModal.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// abdo project ********=====******** END**



index.get("/invoice/:id", (req, res) => {
  InvoiceModal.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error.message); // Respond with error message
    });
});

index.put("/invoicee/:id", (req, res) => {
  InvoiceModal.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      console.log("sdw******************************desd");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(req.body);
});

index.get("/customer/:id", (req, res) => {
  InvoiceCustomerArr.findById(req.params.id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: "Customer not found" });
      }
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error.message); // Respond with error message
    });
});

index.get("/customer-details/:id", (req, res) => {
  const customerId = req.params.id;

  InvoiceCustomerArr.findOne({ "customer._id": customerId })
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: "Customer not found" });
      }

      // العثور على العميل داخل المصفوفة
      const customer = result.customer.find(
        (cust) => cust._id.toString() === customerId
      );

      if (!customer) {
        return res.status(404).json({ message: "Customer details not found" });
      }

      res.json(customer);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// moooooooonggggggggggggggggggooooooooooooooooooo

mongoose
  .connect(process.env.MONGO_LINK, {
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
    console.error("Database connection error:", error); // Log error to the console
  });
