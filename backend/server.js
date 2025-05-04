//Importing the required modules
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
const listingRoute = require('./routes/listingRoutes')

//Express init
const app = express()

//To make sure that we can collect data from frontend 
app.use(cors());
app.use(express.json());


//MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Connected to mongoDB'))
    .catch(err => console.error(err));



app.use('/api/listings', listingRoute)



//Port which will the server will run on
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));