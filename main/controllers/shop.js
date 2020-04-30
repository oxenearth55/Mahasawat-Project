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


exports.updateBank = (req, res) => {
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


exports.updateContact = (req, res) => {
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const {contact} = req.body;
    //NOTE findOne is use to check which shop that we are going to update
    Shop.findOne({ _id: req.shop._id },  (err, shop) => {
      
        if (!contact) {
            return res.status(400).json({
                error: 'contact is required'
            });
        } else {
            shop.contact = contact;
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

exports.addProviderShip = (req, res) => {
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const {shippingProvider1} = req.body;
    const {shippingProvider2} = req.body;
    const {shippingProvider3} = req.body;

    //NOTE findOne is use to check which shop that we are going to update
    Shop.findOne({ _id: req.shop._id },  (err, shop) => {
      
        if (shippingProvider1) {
            shop.shippingProvider1=shippingProvider1 ;
        } 
        if(shippingProvider2){
            shop.shippingProvider2=shippingProvider2 ;

         
        }
        if(shippingProvider3){

            shop.shippingProvider3=shippingProvider3 ;

        }

        shop.save((err, addShipping) => {
            if (err) {
                console.log('Shipping ADD ERROR', err);
                return res.status(400).json({
                    error: 'Shipping add failed'
                });
            }
            // updatedUser.hashed_password = undefined;
            // updatedUser.salt = undefined;
            res.json(addShipping);
        });
    });
};

exports.updateShpping = (req, res) => {
    const {shipping} = req.body;
    Shop.findOne({ _id: req.shop._id },  (err, shop) => {
      
        if (!shipping) {
            return res.status(400).json({
                error: 'shipping is required'
            });
        } else {
            shop.shipping.push(shipping) ;
        }

        shop.save((err, addShipping) => {
            if (err) {
                console.log('Shipping ADD ERROR', err);
                return res.status(400).json({
                    error: 'Shipping add failed'
                });
            }
            res.json(addShipping);
        });
    });
};


exports.updateQrBank = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }

        let shop = req.shop;
        shop = _.extend(shop, fields);

        // 1kb = 1000
        // 1mb = 1000000

        if (files.bankQr) {
            // console.log("FILES PHOTO: ", files.photo);
            if (files.bankQr.size > 1000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                });
            }
            shop.bankQr.data = fs.readFileSync(files.bankQr.path);
            shop.bankQr.contentType = files.bankQr.type;
        }

        shop.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};


exports.updateQrLine = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }

        let shop = req.shop;
        shop = _.extend(shop, fields);

        // 1kb = 1000
        // 1mb = 1000000

        if (files.lineQr) {
            // console.log("FILES PHOTO: ", files.photo);
            if (files.lineQr.size > 1000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                });
            }
            shop.lineQr.data = fs.readFileSync(files.lineQr.path);
            shop.lineQr.contentType = files.lineQr.type;
        }

        shop.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};

exports.bankQr = (req, res, next) => {
    if (req.shop.bankQr.data) {
        res.set('Content-Type', req.shop.bankQr.contentType);
        return res.send(req.shop.bankQr.data);
    }
    next();
};

exports.lineQr = (req, res, next) => {
    if (req.shop.lineQr.data) {
        res.set('Content-Type', req.shop.lineQr.contentType);
        return res.send(req.shop.lineQr.data);
    }
    next();
};


exports.read = (req, res) => {
    return res.json(req.shop);
};