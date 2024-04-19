const { Router } = require("express");

const router = Router();

router.post('/api/v1/dummy', (req, res) => {
    try{
        res.send({
            msg: "dummy api hit success!"
        })
    }
    catch(e){
        console.log(e);
        res.status(500).send({
            error: "some error occurred"
        })
    }
})

router.get('/',(req,res)=>{
    res.send("hiii")
})

module.exports = router;