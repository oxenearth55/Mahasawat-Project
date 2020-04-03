const express = require("express");
const router = express.Router();


const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById, addOrderToUserHistory } = require("../controllers/user");
const {
    create,
    listOrders,
    getStatusValues,
    orderById,
    updateOrderStatus,
    remove,
    uploadImage,
    readOrder,
    photo
    
} = require("../controllers/order");
const { decreaseQuantity } = require("../controllers/product");


router.get(
    "/order/:orderId",
readOrder
);



router.put(
    "/order/:orderId/:userId",
    requireSignin,
    isAuth,
    uploadImage
        );



router.post(
    "/order/create/:userId",
    requireSignin,
    isAuth,
    // addOrderToUserHistory,
    decreaseQuantity,
    create
    // saveImage
);

router.delete(
    "/order/:orderId/:userId",
    requireSignin,
    isAuth,   
    remove
)


// NOTE Get order's photo from database
router.get("/order/photo/:orderId", photo);


//NOTE Both user and admin can see order (Specific order will be provided in front end (Matching user ID with order))
router.get("/order/list/:userId", requireSignin, isAuth, listOrders); //isAdmin

router.get(
    "/order/status-values/:userId",
    requireSignin,
    isAuth,
    // isAdmin,
    getStatusValues
);

//NOTE Only admin can have a permission to implement on order status
router.put(
    "/order/:orderId/status/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    updateOrderStatus
);
//NOTE Get photo (slip) from order 
router.get("/order/slip/:orderId", photo);

router.param("userId", userById);
router.param("orderId", orderById);

module.exports = router;
