// signup ke liye models(schema) taiyar kiye hai 

const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    }

    // username aur password aur hashed form ,salt  khud hi express define kr dega 
    // hme ye sab schema mai define krne ke liye jarurat nhi hai
});


userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);
