const { Order, CartItem } = require('../models/order');
const { errorHandler } = require('../helpers/dbErrorHandler');
// sendgrid for email npm i @sendgrid/mail
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');






exports.readOrder = (req, res) => {
    req.order.photo = undefined;
    return res.json(req.order);
};
 
exports.photo = (req, res, next) => {
    if (req.order.photo.data) {
        res.set('Content-Type', req.order.photo.contentType);
        return res.send(req.order.photo.data);
    }
    next();
};

exports.uploadImage = (req, res) => {
    console.log('UPDATE IMAGE:',req.body)
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
        // 1kb = 1000
        // 1mb = 1000000
        let order = req.order;
        order = _.extend(order, fields);
 
        if (files.photo) {
            // console.log("FILES PHOTO: ", files.photo);
            if (files.photo.photo > 10000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                });
            }
            order.photo.data = fs.readFileSync(files.photo.path);
            order.photo.contentType = files.photo.type;
        }     
        order.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};

exports.orderById = (req, res, next, id) => {
    Order.findById(id)
        .populate('products.product', 'name price')
        .exec((err, order) => {
            if (err || !order) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            req.order = order;
            next();
        });
};

//NOTE remove order from backend 
exports.remove = (req, res) => {
    let order = req.order;
    order.remove((err, deletedOrder) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'Order deleted successfully'
        });
    });
};

exports.create = (req, res) => {
    console.log('CREATE ORDER: ', req.body);
    req.body.order.user = req.profile;
    const order = new Order(req.body.order);
    // saveImage(order, req.body.image);
   
   
      
    order.save((error, data) => {
        if (error) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        }
        // send email alert to admin
        // order.address
        // order.products.length
        // order.amount
        const emailData = {
            to: 'kaloraat@gmail.com',
            from: 'noreply@ecommerce.com',
            subject: `A new order is received`,
            html: `
            <p>Customer name:</p>
            <p>Total products: ${order.products.length}</p>
            <p>Total cost: ${order.amount}</p>
            <p>Login to dashboard to the order in detail.</p>
        `
        };

    
          

        sgMail.send(emailData);
        res.json(data);
    });
};

// exports.create = (req, res) => {
//     console.log('CREATE ORDER: ', req.body);
//     req.body.order.user = req.profile;
//     const order = new Order(req.body.order);
//     order.save((error, data) => {
//         if (error) {
//             return res.status(400).json({
//                 error: errorHandler(error)
//             });
//         }

//         if (order.photo) {
//             // console.log("FILES PHOTO: ", files.photo);
//             if (order.photo.size > 10000000) {
//                 return res.status(400).json({
//                     error: 'Image should be less than 10mb in size'
//                 });
//             }
//             // order.photo.data = fs.readFileSync(order.photo.path);
//             order.photo.contentType = order.photo.type;
//         }

//         // send email alert to admin
//         // order.address
//         // order.products.length
//         // order.amount
//         const emailData = {
//             to: 'kaloraat@gmail.com',
//             from: 'noreply@ecommerce.com',
//             subject: `A new order is received`,
//             html: `
//             <p>Customer name:</p>
//             <p>Total products: ${order.products.length}</p>
//             <p>Total cost: ${order.amount}</p>
//             <p>Login to dashboard to the order in detail.</p>
//         `
//         };
//         sgMail.send(emailData);
//         res.json(data);
//     });
// };




exports.listOrders = (req, res) => {
    Order.find()
        .populate('user', '_id name address')
        .sort('-created')
        .exec((err, orders) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(error)
                });
            }
            res.json(orders);
        });
};

exports.getStatusValues = (req, res) => {
    res.json(Order.schema.path('status').enumValues);
};

exports.updateOrderStatus = (req, res) => {
    Order.update({ _id: req.body.orderId }, { $set: { status: req.body.status } }, (err, order) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(order);
    });
};


// exports.saveImage = (order, imageEncoded) =>{
//     if (imageEncoded == null) return
//     const image = JSON.parse(imageEncoded)
//     if (order != null && imageMimeTypes.includes(order.type)) {
//       order.slipImage = new Buffer.from(order.data, 'base64')
//       order.slipImageType = order.type
//     }
//   };

