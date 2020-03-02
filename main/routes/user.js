const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

const { userById, read, update, purchaseHistory, signup } = require('../controllers/user');

router.post('/signup', signup);


router.get('/secret', requireSignin, (req, res) => {
    res.json({
        user: 'got here yay'
    });
});
//NOTE allow us to read a user 
router.get('/user/:userId', requireSignin, isAuth, read);
//NOTE allow us to update a user
router.put('/user/:userId', requireSignin, isAuth, update);

router.get('/orders/by/user/:userId', requireSignin, isAuth, purchaseHistory);

router.param('userId', userById);

module.exports = router;
