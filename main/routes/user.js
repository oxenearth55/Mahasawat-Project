const express = require('express');
const router = express.Router();

const { sayHi } = require('../controllers/user');
const { sayHello } = require('../controller/user');

router.get('/signin', sayHi);

module.exports = router;