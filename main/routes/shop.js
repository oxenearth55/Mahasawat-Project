const express = require("express");
const router = express.Router();

const {
    shopById
} = require("../controllers/shop");

router.param("shopId", shopById);

module.exports = router;