const express = require("express");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { getShop } = require("../controllers/shop");

const {
    shopById
} = require("../controllers/shop");

router.param("shopId", shopById);

module.exports = router; 



router.get(
    "/shop/shop-name/:userId",
    // requireSignin,
    // isAuth,
    // isAdmin,
    getShop
);