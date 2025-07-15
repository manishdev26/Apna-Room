const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");     //ExpressError function ko use karne ke
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");



const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";        // wanderlust ye database ka nam hai

// ye⬇️ formate mongo ke website se liya gya hai
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


//*************************** for use session ******************* */
const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  httpOnly: true,

  // for expire session(cookies)
  cookie: {
    expire: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },

};


app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.use(session(sessionOptions));
app.use(flash());

// app.use(flash()); routes ke pahle use krna compulsory hoata hai

//*************************** Password authentication ******************* */

app.use(passport.initialize());
// app.use(passport.session());   same session ke liye ek login
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());  
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");

  next();
})

//demo login
// app.get("/demouser", async(req, res) => {
//   let fakeUser = new User({
//     email: "student@gmail.com",
//     username: "delta-student"
//   });

//   // ⬇️ ye database ke ander automatically save krva dega
//   let registerUser = await User.register(fakeUser, "helloworld");
//     res.send(registerUser);

//   })


//ye⬇️ routes ke ander jo folder hai uske listing.js ka sabhi line access krta hai
app.use("/listings", listingRouter);

//ye⬇️ routes ke ander jo folder hai uske reviews.js ka sabhi line access krta hai
app.use("/listings/:id/reviews", reviewRouter);

app.use("/", userRouter);

// ⬆️/listings/:id/reviews  ye jo route hai ye parent route kaha jata hai

app.get('/*splat', async (req, res,next) => {
  //res.send('ok')
  next(new ExpressError(404,"Page Not Found"));
})


app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs",{message});
  //res.status(statusCode).send(message);
});


app.listen(8080, () => {
  console.log("server is listening to port 8080");
});










// npm i express-session     for session
// npm i connect-flash       for flash