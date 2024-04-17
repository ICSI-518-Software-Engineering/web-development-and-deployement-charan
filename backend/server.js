require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');
const path = require('path');

const app = express();
const PORT = 3500;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React build directory
//app.use(express.static(path.join(__dirname, '../frontend/dist')));

// MongoDB connection
const dbConnection = async () => {
    // mongodb+srv://cherry:DdbpGtwHfgJMlWCJ@cluster0.12zbsfz.mongodb.net/inventory-app
    try {
        await mongoose.connect('mongodb://test:test@54.226.69.38:27017/inventory', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err);
    }
};

// Call MongoDB connection function
dbConnection();

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Parse JSON bodies
app.use(express.json());

// POST route for addition (from server3.js)
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 + num2;
  res.json({ result });
});

// Use item routes (from server4.js)
app.use('/', itemRoutes);

// Catch-all route to serve the index.html file for all other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
// });

// Listen on port 3500
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Handle MongoDB connection errors
mongoose.connection.on('error', err => {
    console.log(err);
});
