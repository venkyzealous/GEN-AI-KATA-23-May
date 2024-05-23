const express = require('express');
const router = express.Router();
const Order = require('./models/Order');

// Get all orders
router.get('/orders', async (req, res) => {
  const orders = await Order.find().populate('products').populate('supplier');
  res.json(orders);
});

// Create a new order
router.post('/orders', async (req, res) => {
  const newOrder = new Order(req.body);
  const savedOrder = await newOrder.save();
  res.json(savedOrder);
});

// Update an order
router.put('/orders/:id', async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedOrder);
});

// Delete an order
router.delete('/orders/:id', async (req, res) => {
  const deletedOrder = await Order.findByIdAndDelete(req.params.id);
  res.json(deletedOrder);
});

module.exports = router;