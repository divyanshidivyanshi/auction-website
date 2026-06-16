const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // For parsing JSON

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// MongoDB Atlas connection URI (replace <username>, <password>, and <dbname> with your details)
const uri = 'mongodb+srv://divya:d%40t%40b%40%24eproject@cluster0.mongodb.net/myauction?retryWrites=true&w=majority';

// Connect to MongoDB Atlas

mongoose.connect(uri, {
        useNewUrlParser: true,
    })

    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

// Define a schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Create a model
const User = mongoose.model('User', UserSchema);

// Routes

// Create a new user (Register)
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
