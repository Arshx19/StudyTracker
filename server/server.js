const express = require('express');
require('./config/db');

const app = express();
const PORT = 8080;

app.use(express.json());

// 👇 ADD THIS
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

app.get('/', (req, res) => {
    res.send("welcome");
});

app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
}); 