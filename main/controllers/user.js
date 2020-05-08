const User = require('../models/user');
const { Order } = require('../models/order');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.signup = (req, res) => {
    console.log("req.body", req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};

exports.userById = (req, res, next, id) => {
    User.findById(id)
    .populate('shop', 'name')
    .exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
       
        req.profile = user;
        
        next();
    });
};

exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

// NOTE Grab users from DB 
exports.list = (req, res) => {
    User.find()
    .populate('shop', 'name')
    .exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};


// exports.update = (req, res) => {
//     console.log('user update', req.body);
//     req.body.role = 0; // role will always be 0
//     User.findOneAndUpdate({ _id: req.profile._id }, { $set: req.body }, { new: true }, (err, user) => {
//         if (err) {
//             return res.status(400).json({
//                 error: 'You are not authorized to perform this action'
//             });
//         }
//         user.hashed_password = undefined;
//         user.salt = undefined;
//         res.json(user);
//     });
// };

//NOTE give permission to user (Update role)
exports.updateRole = (req, res) => {
    const { role } = req.body;
    User.findOne({ _id: req.profile._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        if (!role) {
            return res.status(400).json({
                error: 'role is required'
            });
        } else {
            user.role = role;
        }
        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
            // updatedUser.hashed_password = undefined;
            // updatedUser.salt = undefined;
            res.json(updatedUser);
        });
    });
};
   
exports.updateOther = (req, res) => {
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const {shopObjectID, role } = req.body;

    User.findOne({ _id: req.profile._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }

        if (!shopObjectID) {
            return res.status(400).json({
                error: 'Shop is required'
            });
        } else {
            user.shop = shopObjectID;
        }

        if (!role) {
            return res.status(400).json({
                error: 'Role is required'
            });
        } else {
            user.role = role;
        }

      

        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
            // updatedUser.hashed_password = undefined;
            // updatedUser.salt = undefined;
            res.json(updatedUser);
        });
    });
};



exports.update = (req, res) => {
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const { name,email, password, shopObjectID, role } = req.body;

    User.findOne({ _id: req.profile._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        if (!name) {
            return res.status(400).json({
                error: 'Name is required'
            });
        } else {
            user.name = name;
        }

        if (!email) {
            return res.status(400).json({
                error: 'Email is required'
            });
        } else {
            user.email = email;
        }

        if (password) {
            if (password.length < 6) {
                return res.status(400).json({
                    error: 'Password should be min 6 characters long'
                });
            } else {
                user.password = password;
            }
        }

        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
            updatedUser.hashed_password = undefined;
            updatedUser.salt = undefined;
            res.json(updatedUser);
        });
    });
};

// exports.addOrderToUserHistory = (req, res, next) => {
//     let history = [];

//     req.body.order.products.forEach(item => {
//         history.push({
//             _id: item._id,
//             name: item.name,
//             description: item.description,
//             category: item.category,
//             quantity: item.count,
//             transaction_id: req.body.order.transaction_id,
//             amount: req.body.order.amount
//         });
//     });

//     User.findOneAndUpdate({ _id: req.profile._id }, { $push: { history: history } }, { new: true }, (error, data) => {
//         if (error) {
//             return res.status(400).json({
//                 error: 'Could not update user purchase history'
//             });
//         }
//         next();
//     });
// };

// exports.purchaseHistory = (req, res) => {
//     Order.find({ user: req.profile._id })
//         .populate('user', '_id name')
//         .sort('-created')
//         .exec((err, orders) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: errorHandler(err)
//                 });
//             }
//             res.json(orders);
//         });
// };

//NOTE remove User from Database 
exports.remove = (req, res) => {
    let user = req.user;
    user.remove((err, deletedUser) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'User deleted successfully'
        });
    });
};