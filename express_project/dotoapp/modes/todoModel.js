const mongoose = require('mongoose');

// Define the todo schema
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Correct key for validation
        maxLength: 100,
    },
    description: {
        type: String,
        required: true,
        maxLength: 100,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now, // Default to current date
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

// Export the model
module.exports = mongoose.model('Todo', todoSchema);
