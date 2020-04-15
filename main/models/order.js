const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const CartItemSchema = new mongoose.Schema(
  {
    product: { type: ObjectId, ref: "Product" },
    name: String,
    price: Number,
    count: Number, 
    shop: {
      type: ObjectId,
      ref: "Shop"
  },
  },
  { timestamps: true }
);

const CartItem = mongoose.model("CartItem", CartItemSchema);

const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

const OrderSchema = new mongoose.Schema(
  {
    products: [CartItemSchema],
    transaction_id: {},
    amount: { type: Number },
    address: {
      name:String,
      phoneNumber:String,      
      houseNumber: String,
      village: String,
      province: String,
      streetName: String,
      lane: String, // Soi
      district: String,
      subDistrict: String,
      postalNo: String
    },
    shop: {
      type: ObjectId,
      ref: "Shop"
  },

  photo: {
    data: Buffer,
    contentType: String
},

upload: {
  type: Boolean,
  default:false
   
},

// shippingConfirm: {
//   type: Boolean,
//   default:false
   
// },

shippingCost: {
  type: Number
},

    status: {
      type: String,
      default: "รอยืนยันรายการ",
      enum: ["รอยืนยันรายการ","ยืนยันรายการเรียบร้อย", "กำลังจัดสินค้า", "กำลังขนส่ง","ยกเลิก"] // enum means string objects
    },
    updated: Date,
    user: { type: ObjectId, ref: "User" }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);





module.exports = { Order, CartItem };
