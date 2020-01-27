const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = require('./config/keys').mongourl
const Item = require('./routes')
const app = express()

// mongodb configuration
mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('mongoose connected'))
    .catch(err => console.log(err))

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

//routes
app.use('/', Item)

// server listing
const port = process.env.PORT || 3600
app.listen(port, () => console.log(`server is listening on port`, port))