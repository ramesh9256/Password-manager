require('dotenv').config();
const express = require('express');
const db = require('./Config/db');
const cors = require('cors');
const User = require('./models/userModel');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello google cloud');
})

app.post('/add', async (req, res) => {
    console.log("Received Data:", req.body);  // ✅ Debugging ke liye
    try {
        const { username, password, website } = req.body;
        const newPassword = new User({ website, username, password });
        await newPassword.save();
        res.json({ message: "Data stored successfully in MongoDB Atlas" });
    } catch (error) {
        console.error("Database Error:", error);  // ✅ Error ko console me print karo
        res.status(500).json({ message: "Error storing data", error });
    }
});


app.get('/getUsers', async (req, res) => {
    const users = await User.find();
    res.json(users);
});
const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))