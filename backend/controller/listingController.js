const Listing = require('../models/Listing')


const postListing = async (req, res) =>{
    try{
        const newListing = new Listing(req.body);
        await newListing.save();
        res.status(201).json(newListing)
    }catch(err){
        res.status(400).json({error: err.message})
    }
};

const getListing = async(req, res) =>{
    try{
        const listing = await Listing.find();
        res.json(listing);
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    postListing,
    getListing
}