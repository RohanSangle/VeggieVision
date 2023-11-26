// filepath/to/Database.js

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/veggievision', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB', error));

// Define the schema for the scanned items
const scannedItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

// Define the schema for the user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the models
const ScannedItem = mongoose.model('ScannedItem', scannedItemSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  ScannedItem,
  User,
};