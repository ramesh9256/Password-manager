require('dotenv').config();
const express = require('express');
const db = require('./Config/db');
const cors = require('cors');
const User = require('./models/userModel');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/' , (req , res) => {
    res.send('hello google cloud');
})

app.post('/addUser', async (req, res) => {
    const { website, username, password } = req.body;
    const newUser = new User({ website, username, password });
    await newUser.save();
    res.send('User added successfully');
});

app.get('/getUsers', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

const PORT =  5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))