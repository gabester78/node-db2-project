const express = require("express");
const router = express.Router();
const db = require("../data/dbConfig.js");

router.get("/", (req, res) => {
  db("carlist")
    .then((accounts) => {
      res.status(200).json(accounts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Can't get the cars" });
    });
});

router.get("/:id", (req, res) => {
  db("carlist")
    .where({ id: req.params.id })
    .first()
    .then((account) => {
      if (account) {
        res.status(200).json(account);
      } else {
        res.status(404).json({ message: "Can't get the car" });
      }
    });
});

router.post("/", (req, res) => {
  db("carlist")
    .insert(req.body)
    .then((account) => {
      res.status(200).json(account);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Can't create the car" });
    });
});

router.put("/:id", (req, res) => {
  db("carlist")
    .where({ id: req.params.id })
    .update(req.body)
    .then((account) => {
      if (account) {
        res.status(200).json(account);
      } else {
        res.status(404).json({ message: "Can't update the car" });
      }
    });
});

router.delete("/:id", (req, res) => {
  db("carlist")
    .where({ id: req.params.id })
    .del()
    .then((account) => {
      if (account) {
        res.status(200).json(account);
      } else {
        res.status(404).json({ message: "Can't update the car" });
      }
    });
});

module.exports = router;
