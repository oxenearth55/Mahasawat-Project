const express = require("express");
const router = express.Router();
const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo,
    listSearch,
    addComment,
    decreaseQuantity
} = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/product/:productId", read);
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);

router.delete(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);

router.put(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update,
    read
);

router.get("/products", list);
router.get("/products/search", listSearch);
router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
// NOTE Get product's photo from database
router.get("/product/photo/:productId", photo);

router.put(
    "/comment/:productId/:userId",
    requireSignin,
    isAuth,
    addComment

)

router.put(
    "/reduce/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    decreaseQuantity
    
);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
