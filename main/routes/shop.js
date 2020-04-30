const express = require("express");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById} = require("../controllers/user");

const {
    shopById,
    getShop,
    create,
    listShop,
    updateBank,
    updateQrBank,
    updateQrLine,
    read,
    bankQr,
    lineQr,
    addProviderShip,
    updateContact
} = require("../controllers/shop");

router.post(
    "/shop/create/:userId",
     requireSignin, 
     isAuth, 
     isAdmin,
    create
   
);

//SECTION used to update shop information
router.put(
    "/bank/update/:shopId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    updateBank

)

router.put(
    "/contact/update/:shopId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    updateContact

)




//SECTION Use to update bank Qr code and shop line Qr (Formidable)
router.put(
    "/update/bankqr/:shopId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    updateQrBank
)

router.put(
    "/update/lineqr/:shopId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    updateQrLine
)
//NOTE GET QR CODE
router.get("/bankqr/:shopId", bankQr);
router.get("/lineqr/:shopId", lineQr);



router.get(
    "/shop/shop-name/:userId",
    requireSignin,
    isAuth,
    // isAdmin,
    getShop
);

//NOTE get specific shop
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





router.param("userId", userById);
router.param("shopId", shopById);

module.exports = router; 
