const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.json({ message: "Access denied" });
    }

    // ✅ Bearer TOKEN
    const token = authHeader.split(" ")[1];

    try {
        const verified = jwt.verify(token, "secretkey");
        req.user = verified;
        next();
    } catch (err) {
        res.json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;