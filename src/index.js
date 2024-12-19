const express = require('express');
const mongoose = require('mongoose');

const app = express()

app.use(express.json())

const MongoDbURL = 'mongodb+srv://lakshaychauhan27142510:UszeOsmL1O5DtptV@cluster0.nyd9k.mongodb.net/SuperCar'
const port = 5000 || process.env.PORT;

mongoose.connect(MongoDbURL)
    .then(() => { console.log('MongoDb Connected') })
    .catch((e) => { console.log(`MongoDb Error ${e}`) })

app.listen(port, () => { console.log(`Server is Running ${port}`) })