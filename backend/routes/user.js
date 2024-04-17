const { Router } = require("express");
const Patient = require("../models/patientModel");

const router = Router();

router.post('/api/v1/dummy', (req, res) => {
    res.send({
        message: "dummy api hit success"
    })
})

router.post('/api/v1/checkuser', async(req, res) => {
    console.log(req.headers)
    try{
        const {username, email} = req.headers;
        const existingUser = await Patient.findOne({email: email, username: username});
        if(!existingUser){
            res.status(200).send({
                message: "Username not available!"
            })
        }
        else{
            res.status(403).send({
                message: "Username already exists!"
            })
        }
    }
    catch(e){
        console.log(e);
        res.status(500).send({
            error: "some error occurred"
        })
    }
})

router.post('/api/v1/signup', async(req, res) => {
    console.log(req.body);
    try{
        const { userData } = req.body;
        if(!userData){
            res.status(404).send({
                message: "No user data recieved"
            })
        }

        const newUser = new Patient({
            name: userData?.name,
            email: userData?.eamil,
            username: userData?.username,
            password: userData?.password,
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