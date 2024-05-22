require('dotenv').config()
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser"); // Import cookie-parser
const jwt = require("jsonwebtoken"); // Import jsonwebtoken
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const { Strategy: JWTStrategy } = require('passport-jwt');

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
app.use(cookieParser());
// this is session support
app.use(session({
    secret: 'dummySecret',
    saveUninitialized: false,
    resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Serialize and deserialize user should be updated to work with JWT
passport.serializeUser((user, done) => {
    done(null, user.id); // Use user ID for serialization
});
passport.deserializeUser((id, done) => {
    // Find user by ID and pass it to done
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

// Checks if a user is logged in

// Set up passport strategy
passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET,
        callbackURL: 'http://localhost:5173/auth/google/callback',
        passReqToCallback: true, // Pass request to callback
    },
    (req, accessToken, refreshToken, profile, cb) => {
        // Save user profile to database or session
        req.session.user = profile;
        return cb(null, profile);
    }
));

// Update JWT strategy for authentication
passport.use(new JWTStrategy(
    {
        jwtFromRequest: req => req.cookies.jwt,
        secretOrKey: process.env.JWT_SECRET,
    },
    (payload, done) => {
        // Check if user exists based on payload
        User.findById(payload.user.id, (err, user) => {
            if (err) return done(err, false);
            if (user) return done(null, user);
            else return done(null, false);
        });
    }
));

// Create API endpoints
// This is where users point their browsers in order to get logged in
// This is also where Google sends back information to our app once a user authenticates with Google
// This endpoint matches the "callbackURL"
app.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
    console.log("/auth/google/callback")
    const token = jwt.sign({ user: req.session.user }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.cookie('jwt', token, { httpOnly: true, maxAge: 86400000 });
    res.redirect('http://localhost:5173');
});

app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        message: 'You have accessed the protected endpoint!',
        yourUserInfo: req.user,
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
