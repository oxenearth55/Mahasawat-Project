const express = require("express");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { getShop,create} = require("../controllers/shop");

const {
    shopById
} = require("../controllers/shop");

router.param("shopId", shopById);


router.post(
    "/shop/create/:userId",
    create,
   
);

router.get(
    "/shop/shop-name/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    getShop
);

module.exports = router; 
