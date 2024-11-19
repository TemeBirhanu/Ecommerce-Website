const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: String,
  cartId: String,
  cartItems: [
    {
      productId: String,
      title: String,
      image: String,
      price: String,
      quantity: Number,
    },
  ],
  addressInfo: {
    addressId: String,
    address: String,
    city: String,
    pincode: String,
    phone: String,
    notes: String,
  },
  orderStatus: String,
  paywatchestMethod: String,
  paywatchestStatus: String,
  totalAmount: Number,
  orderDate: Date,
  orderUpdateDate: Date,
  paywatchestId: String,
  payerId: String,
});

module.exports = mongoose.model("Order", OrderSchema);