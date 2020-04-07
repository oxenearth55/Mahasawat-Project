const express = require("express");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById} = require("../controllers/user");

const {
    shopById,
    getShop,
    create,
    listShop,
    update,
    read
} = require("../controllers/shop");

router.post(
    "/shop/create/:userId",
     requireSignin, 
     isAuth, 
     isAdmin,
    create
   
);
router.put(
    "/shop/update/:shopId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update

)

router.get(
    "/shop/shop-name/:userId",
    requireSignin,
    isAuth,
    // isAdmin,
    getShop
);

router.get(
    "/shop/:shopId", 
    read
);


//NOTE get Shop Object
router.get('/getShop', 
listShop
);

router.param("userId", userById);
router.param("shopId", shopById);

module.exports = router; 
