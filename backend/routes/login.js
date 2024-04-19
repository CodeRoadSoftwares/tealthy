const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Router } = require("express");
const User = require("../models/userModel")


const router = Router();


router.get("/login",(req,res)=>{
    res.send("hello")
})

// Endpoint for user login
router.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Validate password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', {
        expiresIn: '1h', // Token expires in 1 hour
      });
  
      // Return token to client
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  



module.exports = router;