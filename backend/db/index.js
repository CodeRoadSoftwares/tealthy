const mongoose = require("mongoose");

mongoose.connect(process.env.URL, () => {
    console.log("connected to db")
});