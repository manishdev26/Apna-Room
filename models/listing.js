/*  ye jo listing.js hai es mai schema taiyar krte hai yani bluprint of listing
 like eg title ke liye string type ,price - number ,lucation - string ,image- string set krna parega ki  
esko port krke app.js mai use karenge  */


// ********************************** create schema  ***************************************
const { ref } = require("joi");
const mongoose = require("mongoose");       // database ke liye
const Schema = mongoose.Schema;             // for create schema
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  // ⬆️description ko access krne ke liye sirf ye likhe--- listing.description or  listing[description]

  // ye image object ban gya hai kyuki image ke ander do key value pair hai(filename,url)
  // esiliye kabhi bhi access krne ke liye hame   listing.image.url tab link de ya listing[image][url] aise url
  // access krte hai

  image: {
  filename: {
    type: String,
    default: "listingimage"
  },
  url: {
    type: String,
    //required: true
    default:
      "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        : v,
  }
},


  //  image: {

  //   filename: String,
  //   url: String,
    
  //   // 
  // },
  price: {
  type: Number,
  required: true,
  default:0
},
  location: String,
  country: String,

  //  yeha listinig mai review add krne ke liye ye listing ke ander ye⬇️ likhna prta hai
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    }
  ]


});

// ⬇️yeha ye kr rhe hai ki agar listing hi delete kr de to uska reviews bhi delete hojaye

listingSchema.post("findOneAndDelete" , async(listing) => {
  if(listing){
    await Review.deleteMany({_id : {$in: listing.reviews}});
  }
  
});



// esse pta chalta hai ki Listing ka schema(blueprint) taiyar ho gya
const Listing = mongoose.model("Listing", listingSchema);

// esse hum ko app.js mai use kr skte hai
module.exports = Listing;