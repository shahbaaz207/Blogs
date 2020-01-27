const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Item = new Schema({
    author: String,
    description: String,
    title: String,
    image: String,
    blog: String,
    user: String,
    email: String,
    comment: String,

})

module.exports = mongoose.model('Blogs', Item)