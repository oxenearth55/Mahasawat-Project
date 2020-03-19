const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

const { userById, read, update, purchaseHistory, signup, list,updateRole, updateOther,remove } = require('../controllers/user');

router.post('/signup', signup);


router.get('/secret', requireSignin, (req, res) => {
    res.json({
        user: 'got here yay'
    });
});
//NOTE allow us to read a user 
router.get('/user/:userId', requireSignin, read);


//NOTE allow us to update a user
router.put('/user/:userId', requireSignin, isAuth, update);
//NOTE allow admin to update other users

router.put('/user/other/:userId', requireSignin, updateOther);


router.put('user/:uId/:role/:userId', requireSignin, isAuth, updateRole)

router.get('/orders/by/user/:userId', requireSignin, isAuth, purchaseHistory);

router.param('userId', userById);
// NOTE grab all of user objects from DB
router.get('/users', list);

router.delete(
    "/user/:otherId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
)



module.exports = router;
