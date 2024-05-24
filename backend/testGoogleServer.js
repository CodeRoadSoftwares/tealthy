require('dotenv').config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const passport = require('passport');
const { OAuth2Client } = require('google-auth-library');
const mongoose = require('mongoose');
const MongoDBStore = require("connect-mongodb-session")(session);
const userRouter = require("./routes/user");
const Patient = require('./models/patientModel');

const app = express();

const MONGODB_URI = process.env.MONGODB_URI;

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

const client = new OAuth2Client(process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID);

app.post('/auth/google', async (req, res) => {
    const code = req.body;
    console.log('Incoming code:', code);
    try {
        const { tokens } = await client.getToken({
            code,
            client_id: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
            client_secret: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET,
            redirect_uri: 'http://localhost:5173',
        });

        const ticket = await client.verifyIdToken({
            idToken: tokens.id_token,
            audience: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
        });
        console.log('ID Token:', ticket.getPayload()); // Add this line for debugging

        const { sub: googleId, name, email, picture } = ticket.getPayload();

        let user = await Patient.findOne({ googleId });
        if (!user) {
            user = new Patient({ googleId, name, email, picture });
            await user.save();
        }

        const token = jwt.sign({ user: { id: user._id, name: user.name, email: user.email } }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({ token, user: { name: user.name, email: user.email, picture: user.picture } });
    } catch (error) {
        console.error('Error exchanging code for tokens or verifying ID token', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
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
