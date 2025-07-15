/* proper website build कर रहे है तो starting मई कुछ कुछ data होना चाहिए जिसके साथ डालस कर सके
इसीलिए initialize database करते है  init folder में.  */

// ये data chat GPT  से लिए गया है 

const sampleListings = [
 
  {
    title: "Nitish 1BHK Room",
    description:
      "1BHK room with 350 sq.ft. area, natural sunlight, proper ventilation. Located near Darbhanga Junction, ideal for students and job seekers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Darbhanga",
    country: "India",
  },
  {
    title: "Cozy Room near BNMU",
    description:
      "Spacious single room with 2 beds, attached bathroom, peaceful area near BNMU, Madhepura. Suitable for girls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1595526114035-0f1f5d729b0f?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Madhepura",
    country: "India",
  },
  {
    title: "2 Room Set near Samastipur College",
    description:
      "Well-ventilated 2 room set with balcony and kitchen. Nearby market and transport. Safe for families.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607688592-e3e9d8d75da1?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Samastipur",
    country: "India",
  },
  {
    title: "Affordable Room in Purnea Main Road",
    description:
      "Single room with fan, light, and attached washroom. Close to bus stand and shops. Semi-furnished.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1594669684662-7f261d2a6a1b?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Purnea",
    country: "India",
  },
  {
    title: "Shared PG Room in Begusarai",
    description:
      "2 sharing PG room for boys. Beds, table, light included. Free Wi-Fi and drinking water available.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586042091262-3e0b9956d65c?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Begusarai",
    country: "India",
  },
  {
    title: "Girls Hostel Room in Muzaffarpur",
    description:
      "Secure girls' hostel with attached bathroom, study desk, and mess facility. Near L.S. College.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1588854337116-3d5a875fbd16?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Muzaffarpur",
    country: "India",
  },

  {
    title: "Spacious 1BHK in Gaya",
    description:
      "Quiet 1BHK room near Vishnupad Temple, Gaya. 400 sq.ft., attached kitchen & bathroom. Ideal for small families.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585152320-d6c6e99150ef?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Gaya",
    country: "India",
  },
  {
    title: "Furnished Room near Motihari University",
    description:
      "Fully furnished single room with study desk and cupboard. Calm colony. Students preferred.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585152307-4fd7acdd2a30?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Motihari",
    country: "India",
  },
  {
    title: "2BHK Flat in Bhagalpur City Center",
    description:
      "Modern 2BHK flat with modular kitchen, geyser, and 24hr water. Close to railway station.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585152316-7531e84486c4?auto=format&fit=crop&w=800&q=60",
    },
    price: 7500,
    location: "Bhagalpur",
    country: "India",
  },
  {
    title: "Budget Room near Siwan Hospital",
    description:
      "Simple room with shared washroom. Suitable for single person. Hospital & bus stop nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1595526200007-5a6e2b9b291b?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Siwan",
    country: "India",
  },
  {
    title: "Clean Single Room in Buxar Town",
    description:
      "Room with fan, curtain, and clean tiles. Market and coaching centers within 5 mins walking.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607688592-57961aa5ddee?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Buxar",
    country: "India",
  },
  {
    title: "3 Room Set for Family in Sitamarhi",
    description:
      "3 spacious rooms with separate hall and kitchen. Peaceful colony with security. Family only.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585152081-3d5f8d67f0e6?auto=format&fit=crop&w=800&q=60",
    },
    price: 8000,
    location: "Sitamarhi",
    country: "India",
  },
  {
    title: "Students Room near Arrah College",
    description:
      "Fully tiled room with bed, fan, light. Ideal for students. Walking distance to Arrah College.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585152160-98a5bb6b2b0e?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Arrah",
    country: "India",
  },
  {
    title: "Girls Room near Katihar Station",
    description:
      "Safe room for girls with CCTV, study table, attached washroom. Mess available at extra charge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585152349-31f72a9646f5?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Katihar",
    country: "India",
  },
  {
    title: "Room with Balcony in Kishanganj",
    description:
      "Sunny single room with private balcony. Calm neighborhood. Water & electricity included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585152388-843c64a7bb10?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Kishanganj",
    country: "India",
  },
  {
    title: "Couple-Friendly 1BHK in Chhapra",
    description:
      "Newly built 1BHK with tiled floor, proper ventilation, and inverter backup. Parking available.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585152132-8a028821e252?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Chhapra",
    country: "India",
  },


];

module.exports = { data: sampleListings };