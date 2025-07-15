// yeha require ka use esiliye kiya jata hai ki un sabhi ka use esmai ho 


const initData = require("./data.js");     // data ko store initData mai kiya ja rha hai 
const Listing = require("../models/listing.js");   // schema(listing) ko use krne ke liye


// ********************************** connect mongoose for database  ***************************************
const mongoose = require("mongoose");      
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";      

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

// ********************************** insert data in database  ***************************************

const initDB = async () => {
  await Listing.deleteMany({});             // database empty ke liye
  await Listing.insertMany(initData.data);   // many data insert ke liye
  console.log("data was initialized");       
};

initDB();                         //call kiya ja rha hai initDB() function ko