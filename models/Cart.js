const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cart = new Schema(
  {
    user_id: { type: String, required: true },
    products: [
      {
        product_id: {
          type: String
        },
        quantity: {
          type: Number,
          default: 1
        }
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Cart', Cart)
