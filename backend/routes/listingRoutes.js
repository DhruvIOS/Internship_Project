//importing all the required modules
const express = require('express')
const router = express.Router();
const { postListing, getListing } = require ('../controller/listingController')

//Init of router
router.post('/', postListing);
router.get('/', getListing);

module.exports = router;


