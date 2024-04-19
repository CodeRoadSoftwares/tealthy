const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const loginRouter = require('./routes/login')
const session = require("express-session");
const mongoose = require("mongoose");
const MongoDBStore = require("connect-mongodb-session")(session);

require("dotenv").config();

const app = express();

const MONGODB_URI =
  "mongodb+srv://coderoadsoftwares:5tr0n9P%4055w0rd@mycluster.9je5y9a.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster/tealthy";

// storing session in mongo db
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.send('Hello')
})

// session middleware
app.use(
  session({
    secret: "dummy-secret-key",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }, //1 week
  })
);

app.use("/user", userRouter);
app.use("/login", loginRouter);

// Connection to database
async function connectToDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(
      `You successfully connected to MongoDB with state ${mongoose.connection.readyState}`
    );
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
connectToDatabase();



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
