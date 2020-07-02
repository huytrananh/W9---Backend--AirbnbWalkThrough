// title, pictureUrl, country, price, duration

const mongoose = require("mongoose")

const expSchema = new mongoose.Schema({
    title: String,
    pictureUrl: String,
    country: String,
    price: Number,
    duration: Number
})

const Experience = mongoose("Experience")