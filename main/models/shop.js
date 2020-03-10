const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;


const shopSchema = new mongoose.Schema({
        description: {
            type: String,
            trim: true,
            maxlength: 2000
        },
        name: {
            type: String,
            default: "Not Registered",
            // Boonlert's Orchard (Jaew Aunt)
            // Kanitha's Gac House
            // Jam Uncle Lotus Field
            // Soi's Orchid Farm
            enum: ["Not Registered", "Orchid", "Gac", "EarthPavilion", "Lotus", "Orchard"]
        },
        image: {
            data: Buffer,
            contentType: String
        },
        user: { type: ObjectId, ref: "User"},
        product: { type: ObjectId, ref: "Product"}
    },
    
    { timestamps: true }

);


const Shop = mongoose.model("Shop", shopSchema);


// module.exports = mongoose.model("Shop", shopSchema);
module.exports = {Shop};