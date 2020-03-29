const { Shop } = require('../models/shop');
const { errorHandler } = require('../helpers/dbErrorHandler');
const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');




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


// exports.create = (req, res) => {
//     console.log('CREATE SHOP: ', req.body);
//     shop.save((error, data) => {
//         if (error) {
//             return res.status(400).json({
//                 error: errorHandler(error)
//             });
//         }
        
       
//         res.json(data);
//     });
// };

exports.create = (req, res) => {
    // req.body.shop.user = req.profile;

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
        // check for all fields
        //name, description, price, category, quantity, shipping
        const { name, description } = fields;

        if (!name || !description) {
            return res.status(400).json({
                error: 'All fields are required'
            });
        }

        let shop = new Shop(fields);

        // 1kb = 1000
        // 1mb = 1000000

        if (files.photo) {
            // console.log("FILES PHOTO: ", files.photo);
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                });
            }
            shop.photo.data = fs.readFileSync(files.photo.path);
            shop.photo.contentType = files.photo.type;
        }

        shop.save((err, result) => {
            if (err) {
                console.log('SHOP CREATE ERROR ', err);
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};

//NOTE  Get shop Object 
exports.listShop = (req, res) => {
    Shop.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};



exports.getShop = (req, res) => {
    res.json(Shop.schema.path('name').enumValues);
};


// exports.update = (req, res) => {
//     let form = new formidable.IncomingForm();
//     form.keepExtensions = true;
//     form.parse(req, (err, fields, files) => {
//         if (err) {
//             return res.status(400).json({
//                 error: 'Image could not be uploaded'
//             });
//         }

//         let shop = req.shop;
//         shop = _.extend(shop, fields);

//         // 1kb = 1000
//         // 1mb = 1000000

//         if (files.photo) {
//             // console.log("FILES PHOTO: ", files.photo);
//             if (files.photo.size > 10000000) {
//                 return res.status(400).json({
//                     error: 'Image should be less than 10mb in size'
//                 });
//             }
//             shop.photo.data = fs.readFileSync(files.photo.path);
//             shop.photo.contentType = files.photo.type;
//         }

//         shop.save((err, result) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: errorHandler(err)
//                 });
//             }
//             res.json(result);
//         });
//     });
// };


exports.update = (req, res) => {
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const {bankinfo} = req.body;
    //NOTE findOne is use to check which shop that we are going to update
    Shop.findOne({ _id: req.shop._id },  (err, shop) => {
      
        if (!bankinfo) {
            return res.status(400).json({
                error: 'bankAccount is required'
            });
        } else {
            shop.bankAccount = bankinfo;
        }

        shop.save((err, updatedShop) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
            // updatedUser.hashed_password = undefined;
            // updatedUser.salt = undefined;
            res.json(updatedShop);
        });
    });
};



exports.read = (req, res) => {
    return res.json(req.shop);
};