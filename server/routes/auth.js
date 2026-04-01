const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');


// ✅ Protected Route
router.get('/profile', authMiddleware, (req, res) => {
    res.json({
        message: "Protected profile data",
        user: req.user
    });
});


// ✅ Register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.json({ message: "User Registered" });

    } catch (err) {
        console.log(err);
        res.json({ message: "Error" });
    }
});


// ✅ Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign(
                { userid: user._id },
                "secretkey"   // ✅ SAME everywhere
            );

            res.json({
                success: true,
                message: "Login successful",
                token: token
            });
        } else {
            res.json({ message: "Wrong password" });
        }

    } catch (err) {
        console.log(err);
        res.json({ message: "Error" });
    }
});

module.exports = router;