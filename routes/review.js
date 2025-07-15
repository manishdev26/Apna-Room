// ye restructuring ke liye routes folder ke ander jo bhi .js file banate hai vah application.js se link krke 
// application.js mai code ko kam kr skte hai

const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");     //ExpressError function ko use karne ke
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js")
const Listing = require("../models/listing.js");           // listing ko define kiya gya hai


const validateReview = (req,res,next) => {
  let { error } = reviewSchema.validate(req.body);

  if(error) {

    // ⬇️ esse hua ki sab error ek sath print nhi hoga only message print hoga
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }else{
    next();
  }
}


// yeha only post routre hi create kiye hai kyuki reviews jo hai vah kisi kisi listing ke ander hoga

//Post Review route

router.post("/" ,validateReview,wrapAsync( async(req,res) => {

  // ⬇️ esse listing ko exact access karega aur hame dega
  let listing = await Listing.findById(req.params.id);

  //create new review
  let newReview = new Review(req.body.review);

  console.log(listing);
  listing.reviews.push(newReview);

  
  await newReview.save();
  await listing.save();

  console.log("new review saved");
  //res.send("new review saved");

  req.flash("success", "New Review Created!");
  res.redirect(`/listings/${listing._id}`);


}));

//Delete Review Route
router.delete(
  "/:reviewId",
  wrapAsync(async(req, res) => {
    let {id, reviewId} = req.params;

    await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);

  })

);

module.exports = router;

