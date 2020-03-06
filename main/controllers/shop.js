const { Shop } = require('../models/shop');
const { errorHandler } = require('../helpers/dbErrorHandler');


exports.shopById = (req, res, next, id) => {
    Shop.findById(id)
        .exec((err, shop) => {
            if (err || !shop) {
                return res.status(400).json({
                    error: 'Shop not found'
                });
            }
            req.shop = shop;
            next();
        });
};


exports.getShop = (req, res) => {
    res.json(Shop.schema.path('name').enumValues);
};

