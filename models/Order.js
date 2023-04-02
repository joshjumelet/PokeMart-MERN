const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
  {
    user_id: { type: String, required: true },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ],
    amount: { type: String, required: true },
    address: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Order', Order)
