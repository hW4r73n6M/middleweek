const express = require("express");
const router = express.Router();
const { getAllProssionals } = require("../controllers/professional");
router.get("/", getAllProssionals);
module.exports=router;