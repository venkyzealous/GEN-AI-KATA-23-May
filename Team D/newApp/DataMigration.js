const mongoose = require('mongoose');
const Order = require('./models/Order');

// Connect to the old and new databases
const oldDb = mongoose.createConnection('mongodb://localhost:27017/oldDb', { useNewUrlParser: true, useUnifiedTopology: true });
const newDb = mongoose.createConnection('mongodb://localhost:27017/newDb', { useNewUrlParser: true, useUnifiedTopology: true });

// Old Order model
const OldOrder = oldDb.model('Order', new mongoose.Schema({}), 'orders');

// Migrate data
OldOrder.find().then(oldOrders => {
  oldOrders.forEach(oldOrder => {
    const newOrder = new Order({
      orderId: oldOrder.orderId,
      orderDate: oldOrder.orderDate,
      deliveryDate: oldOrder.deliveryDate,
      cost: oldOrder.cost,
      outstanding: oldOrder.outstanding,
      products: oldOrder.products,
      supplier: oldOrder.supplier
    });

    newOrder.save().then(() => console.log(`Order ${oldOrder.orderId} migrated`));
  });
}).catch(err => console.error(err));