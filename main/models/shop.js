const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;




const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },   
    description: {
            type: String,
            trim: true,
            maxlength: 2000
        },
        // name: {
        //     type: String,
        //     default: "Not Registered",
        //     // Boonlert's Orchard (Jaew Aunt)
        //     // Kanitha's Gac House
        //     // Jam Uncle Lotus Field
        //     // Soi's Orchid Farm
        //     enum: ["Not Registered", "Orchid", "Gac", "EarthPavilion", "Lotus", "Orchard"]
        // },
        image: {
            data: Buffer,
            contentType: String
        },

        bankAccount: {
            personName:String,
            bankName:String,      
            accountNumber: String,
          
          },

          shippingProvider1: {
            providerName:String,
            shippingCost:Number,      
            avilable:{ type:Boolean, default:false},
          
          },

          shippingProvider2: {
            providerName:String,
            shippingCost:Number,      
            avilable:{ type:Boolean, default:false},
          
          },


          shippingProvider3: {
            providerName:String,
            shippingCost:Number,      
            avilable:{ type:Boolean, default:false},
          
          },


          photo: {
            data: Buffer,
            contentType: String
        },

    //       shipping: [{
    //         providerName: {type: String},
    //         shippingCost: {
    //             type: Number
    //         }, 
    //         avilable:{
    //             type:Boolean,
    //             default:false
    //         }

             

    //     },    
    // ],




          


        user: { type: ObjectId, ref: "User"},
        product: { type: ObjectId, ref: "Product"}
    },
   

    
    { timestamps: true }

);


const Shop = mongoose.model("Shop", shopSchema);


// module.exports = mongoose.model("Shop", shopSchema);
module.exports = {Shop};