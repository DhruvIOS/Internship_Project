const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    title: String,
    description: String,
    rent: Number,
    address: String,
    rooms: Number,
    contact: String
},{
    timestamps: true
})

module.exports = mongoose.model('Listing', ListingSchema)