
const express = require('express');
const router = express.Router();

// Import the controller functions
const { createTodo, getTodo, getById, updateTodo, deleteTodo } = require('../controller/createTodo');


// Define routes
router.post('/todo', createTodo);
router.get('/todo', getTodo);
router.get('/todo/:id', getById);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

// Export the router
module.exports = router;

