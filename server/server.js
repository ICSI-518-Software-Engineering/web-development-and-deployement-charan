require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');
const path = require('path');

const app = express();
const PORT = 3500;

app.use(cors())

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catch-all route to serve the index.html file for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://cherry:DdbpGtwHfgJMlWCJ@cluster0.12zbsfz.mongodb.net/inventory-app', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (err) {
        console.error(err);
    }
};

dbConnection();

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Parse JSON bodies
app.use(express.json());  

app.use('/', itemRoutes);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  
  mongoose.connection.on('error', err => {
    console.log(err)
  })
