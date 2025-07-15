// jo listing banaye hai un sabhi mai review section add krne ke liye 
// one to many relation mongoose middleware use krna padega


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Review", reviewSchema);