require('dotenv').config();
const mongoose = require('mongoose');

// Replace <username>, <password>, and <dbname> in the connection string
const uri = 'mongodb+srv://ani:<myd%40t%40b%24eproject>@cluster0.q2wqfyb.mongodb.net/'
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const dotenv=require('dotenv')

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// API route to send dynamic message
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from your Node.js backend!' });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});   

mongoose.connect(uri, {
    useNewUrlParser: true,
})

    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));