const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        description: {
            type: String,
            required: true,
            maxlength: 2000
        },
        detail: {
            type: String,
            required: true,
            maxlength: 2000
        },
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
        shop: {
            type: ObjectId,
            ref: "Shop",
            required: true
        },
        quantity: {
            type: Number
        },
        sold: {
            type: Number,
            default: 0
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        shipping: {
            type: String,
            required: true
        },
        rating: [{
            userId: {type: ObjectId},
            rate: {
                type: Number,
                default: 0
            }
        }],

        comments: [{
            userName: {type: String},
            comment: {
                type: String,
                maxlength: 2000
            }
        }]
     


    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
