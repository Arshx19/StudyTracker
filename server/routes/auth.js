const express = require('express'); 
const router = express.Router(); 
const User = require('../models/User'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

router.post('/register', async (req,res)=>{  
    try { 
        const { name,email,password} = req.body;  

        const existingUser = await User.findOne({ email }); 
        if(existingUser){ 
            return res.send("User already exists"); 
        } 


        const hashedPassword = await bcrypt.hash(password, 10); 


        console.log("HASHED:", hashedPassword);

        const newUser = new User({
            name,
            email,
            password: hashedPassword         
        });  
        await newUser.save();  

        res.send("User Registered");  
    } catch (err) { 
        console.log(err);  
        res.send("Error"); 
    } 
}); 

router.post('/login', async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.send("User not found");
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(isMatch){
            const token = jwt.sign(
                {userid:user._id},
                "secretKey"
            );
            res.send({
                message:"login Successful",
                token:token
            });
        }else{
            return res.send("Wrong password");
        }
    }
    catch(err){
        console.log(err);
        res.send("Error");
    }
});

module.exports = router;