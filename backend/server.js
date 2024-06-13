require('dotenv').config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose'); // Import mongoose if you're using MongoDB
const MongoDBStore = require("connect-mongodb-session")(session);
const userRouter = require("./routes/user"); // Make sure you have this router
const Patient = require('./models/patientModel'); // Ensure you have this model

const app = express();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://coderoadsoftwares:5tr0n9P%4055w0rd@mycluster.9je5y9a.mongodb.net/tealthy?retryWrites=true&w=majority&appName=MyCluster";

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Access-Control-Allow-Credentials",
    ],
};

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: "sessions",
});

store.on('error', function(error) {
    console.error(error);
});

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET || 'dummySecret',
    saveUninitialized: false,
    resave: false,
    store: store,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Patient.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback', // Update this URL
        passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, cb) => {
        Patient.findOrCreate({ googleId: profile.id }, (err, user) => {
            return cb(err, user);
        });
    }
));

passport.use(new JWTStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    },
    (payload, done) => {
        Patient.findById(payload.user.id, (err, user) => {
            if (err) return done(err, false);
            if (user) return done(null, user);
            else return done(null, false);
        });
    }
));

app.use("/user", userRouter);

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
    const token = jwt.sign({ user: req.user }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.cookie('jwt', token, { httpOnly: true, maxAge: 86400000 });
    res.redirect('http://localhost:5173');
});

app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        message: 'You have accessed the protected endpoint!',
        yourUserInfo: req.user,
    });
});

const PORT = process.env.PORT || 3000;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });
