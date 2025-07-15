// ye restructuring ke liye routes folder ke ander jo bhi .js file banate hai vah application.js se link krke 
// application.js mai code ko kam kr skte hai


const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");     //ExpressError function ko use karne ke
const {listingSchema} = require("../schema.js");
const Listing = require("../models/listing.js");           // listing ko define kiya gya hai


const validateListing = (req,res,next) => {
  let { error } = listingSchema.validate(req.body);

  if(error) {

    // ⬇️ esse hua ki sab error ek sath print nhi hoga only message print hoga
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }else{
    next();
  }
}



//index routes
router.get("/", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));

//New Route
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Create Route
router.post("/",validateListing, wrapAsync(async (req, res,next) => {
      const newListing = new Listing(req.body.listing);
      await newListing.save();
      req.flash("success", "New Listing Created!");

      res.redirect("/listings");
        
 }));


 //show routes
 router.get("/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  // yeha populate use krne se review ka id hi nhi dikhega sab chij dekhega
  const listing = await Listing.findById(id).populate("reviews");
 
  if(!listing){
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
}));

//Edit Route
router.get("/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if(!listing){
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
}));

//Update Route
router.put("/:id" ,validateListing, wrapAsync(async (req, res) => {


  let { id } = req.params;
  console.log(req.body.listing);
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
}));


//delete routes
router.delete("/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "New Listing Deleted!");
  res.redirect("/listings");
}));


module.exports = router;

