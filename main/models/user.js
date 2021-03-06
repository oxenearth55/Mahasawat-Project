const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');
const { ObjectId } = mongoose.Schema;
//NOTE Hiden property in mongo schema plugIn 
let mongooseHidden = require('mongoose-hidden')({ defaultHidden: {hashed_password: true, salt:true } } , )

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,

        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        hashed_password: {
            type: String,
            required: true,
            // hideJSON: true 
            
        },

        shop: {
            type: ObjectId,
            ref: "Shop",
            default: '5e6b55661e7f9809f1f3b8cd'
       },

        about: {
            type: String,
            trim: true
        },
        salt:{ 
            type:String,
            // hideJSON: true 
            },
        role: {
            type: Number,
            default: 0
        },
       
    },
    { timestamps: true }
);

userSchema.plugin(mongooseHidden)

// virtual field
userSchema
    .virtual('password')
    .set(function(password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

userSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    }
};

module.exports = mongoose.model('User', userSchema);