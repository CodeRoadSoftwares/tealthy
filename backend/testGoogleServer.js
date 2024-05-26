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
const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
    process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET,
    'postmessage',
);
const app = express();

const MONGODB_URI = process.env.MONGODB_URI;

const corsOptions = { // basic set up that allows the home address to access server 
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

store.on('error', function (error) {
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

app.post('/auth/google', async (req, res) => { // triggers when a user logins via Google OAuth 
    const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
    console.log(tokens);
    try {
        const ticket = await client.verifyIdToken({ // get ticket 
            idToken: tokens.id_token,
            audience: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
        });
        const { name, email } = ticket.getPayload();
        console.log("Ticket Payload:", ticket.getPayload())
        console.log("This is name:", name)
        console.log("This is email:", email)
        // check if the user exists in ther database 
        let user = await Patient.findOne({ email });
        if (!user) { // if not, create a new user 
            console.log("The user is not found. Create a new user.")
            defaultPassword = "null";
            defaultPhoneNum = "null";
            defaultAddress = "null";
            defaultSalt = "1";
            defaultUsername = name;
            user = new Patient({
                password: defaultPassword,
                name,
                email,
                phoneNumber: defaultPhoneNum,
                address: defaultAddress,
                salt: defaultSalt,
                username: name,
            });
            await user.save();
        }
        // generate a JWT token 
        const token = jwt.sign({ user: { salt: user.salt, name: user.name, email: user.email } }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.cookie('jwt', token, {
            httpOnly: true,
            // will add other cookie options such as secure, sameSite, etc.
        });

        res.status(200).json({ token, user: { salt: user.salt, name: user.name, email: user.email } });
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
