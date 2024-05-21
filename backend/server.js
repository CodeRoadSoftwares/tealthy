require('dotenv').config()
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
const corsOptions = { // allowing google login to send credential information to authenticate users
    origin: "http://localhost:5173", // httponly request from the site
    credentials: true,  // use cookies 
    methods: ["GET", "POST", "PUT", "DELETE"], // set up allowed methods 
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Access-Control-Allow-Credentials",
    ],
};

app.use(cors(corsOptions)); // use this to allow access from google login request 
app.use(bodyParser.json());
// this is session support
app.use(session({
    secret: 'dummySecret',
    saveUninitialized: false,
    resave: false
}));
//we can set the store for the session, our mongoDb when we have a db coneection string
app.use("/user", userRouter);
// Add session support
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((userDataFromCookie, done) => {
    done(null, userDataFromCookie);
});
// Checks if a user is logged in
const accessProtectionMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).json({
            message: 'must be logged in to continue',
        });
    }
};
// Set up passport strategy
passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET,
        callbackURL: 'http://localhost:5173',
        scope: ['email'],
    },
    // This is a "verify" function required by all Passport strategies
    (accessToken, refreshToken, profile, cb) => {
        console.log('Our user authenticated with Google, and Google sent us back this profile info identifying the authenticated user:', profile);
        return cb(null, profile);
    },
));
// Create API endpoints
// This is where users point their browsers in order to get logged in
// This is also where Google sends back information to our app once a user authenticates with Google
// This endpoint matches the "callbackURL"
app.get('/',
    passport.authenticate('google', { failureRedirect: '/', session: true }),
    (req, res) => {
        console.log('successfully authenticated, here is the user object:', req.user);
        // res.json(req.user);
        res.redirect('/');
    }
);
app.get('/protected', accessProtectionMiddleware, (req, res) => {
    res.json({
        message: 'You have accessed the protected endpoint!',
        yourUserInfo: req.user,
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
