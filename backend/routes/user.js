const { Router } = require("express");
const { userCheckBody, signUpBody } = require("../helpers/requestSchemaValidators");
const { checkUserExists } = require("../helpers/signUpHelper");
const Patient = require("../models/patientModel");

const router = Router();

router.post('/api/v1/check-user-availability', async(req, res) => {
    console.log(req.body)
    const { success } = userCheckBody.safeParse(req.body);
    try{
        if(!success){
            return res.status(400).send({
                message: "Request validation failed!"
            })
        }
        checkUserExists({ email: req.body.email, username: req.body.username })
        .then(result => {
            if (result.exists) {
                console.log(`User with ${result.field} ${result.value} already exists`);
                return res.status(401).send({
                    message: `User with email/username already exists`
                })
            } else {
                console.log('No user found with the provided email, or username');
                return res.status(200).send({
                    message: 'Username/email available!'
                })
            }
        })
        .catch(error => {
            console.error(error);
        });
    }
    catch(e){
        console.log(e);
        res.status(500).send({
            error: "some error occurred"
        })
    }
})

router.post('/api/v1/signup', async(req, res) => {
    const { success } = signUpBody.safeParse(req.body);
    console.log(req.body);
    try{
        if(!success){
            return res.status(404).send({
                message: "Request validation failed!"
            })
        }

        const newUser = new Patient({
            name: userData?.name,
            email: userData?.email,
            username: userData?.username,
            password: userData?.password,
            salt: "preSaveSalt",
            phoneNumber: userData?.phone,
            address: userData?.address
        });

        await newUser.save();
        res.status(201).send({
            message: "New user registered successfully!"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            message: "Some error occurred"
        })
    }
})

module.exports = router;