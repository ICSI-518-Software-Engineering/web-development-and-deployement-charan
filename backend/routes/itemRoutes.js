const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

const router = express.Router();

const {login,register} = require('../controllers/auth.js');

// Inventory schema and model
const inventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Inventory = mongoose.model('Inventory', inventorySchema);

// file uploads handling
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// CREATE route
router.post('/create', upload.single('image'), async (req, res) => {
    const { name, quantity } = req.body;
    const image = req.file.filename;
  
    try {
      const newInventory = new Inventory({
        name,
        quantity,
        image
      });
  
      await newInventory.save();
      console.log('Inventory saved to MongoDB:', newInventory);
  
      res.json({ message: 'Inventory created successfully' });
    } catch (error) {
      console.error('Error saving inventory to MongoDB:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // GET route
router.get('/find', async (req, res) => {
    try {
      const inventoryItems = await Inventory.find();
      res.json(inventoryItems);
    } catch (error) {
      console.error('Error fetching inventoryItems from MongoDB:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // UPDATE route
router.patch('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, quantity } = req.body;
  
    try {
      const updatedInventoryItem = await Inventory.findByIdAndUpdate(id, { name, quantity }, { new: true });
      
      if (!updatedInventoryItem) {
        return res.status(404).json({ message: 'Inventory Item not found' });
      }
  
      res.json(updatedInventoryItem);
    } catch (error) {
      console.error('Error updating inventory item:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
    // DELETE route
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedInventoryItem = await Inventory.findByIdAndDelete(id);
  
      if (!deletedInventoryItem) {
        return res.status(404).json({ message: 'Inventory item not found' });
      }
  
      res.json({ message: 'Inventory item deleted successfully' });
    } catch (error) {
      console.error('Error deleting inventory item:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  router.post("/login",login );
  router.post("/register",register);
  

module.exports = router;
