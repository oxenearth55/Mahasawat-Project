const express = require("express");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById} = require("../controllers/user");

const {
    shopById,
    getShop,
    create,
    listShop
} = require("../controllers/shop");

router.post(
    "/shop/create/:userId",
     requireSignin, 
     isAuth, 
     isAdmin,
    create
   
);

router.get(
    "/shop/shop-name/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    getShop
);

//NOTE get Shop Object
router.get('/shop/get', listShop);

router.param("userId", userById);
router.param("shopId", shopById);

module.exports = router; 