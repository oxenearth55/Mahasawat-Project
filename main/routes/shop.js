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
    updateQrCode,
    read,
    photo,
    addProviderShip
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

router.put(
    "/update/qrCode/:shopId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    updateQrCode

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

router.put(
    "/shipping/:shopId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    addProviderShip

)

router.get("/qr/:shopId", photo);




router.param("userId", userById);
router.param("shopId", shopById);

module.exports = router; 
