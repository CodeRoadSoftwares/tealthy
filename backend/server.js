require('dotenv').config()
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'dummySecret',
    saveUninitialized: false,
    resave: false
}));
//we can set the store for the session, our mongoDb when we hav a db coneection string

app.use("/user", userRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
