const mongoose = require("mongoose");

// mongoose.connect(process.env.URL, () => {
//     console.log("connected to db")
// }, e => console.error(e));

mongoose.connect(process.env.URL)
  .then(() => console.log('Connected to Mongo Successfully!'))
  .catch(error => console.error(error));