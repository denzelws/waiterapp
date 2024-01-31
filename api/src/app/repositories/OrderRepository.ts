import { Order } from '../models/Order'
import { ProductProps } from './ProductRepository'

type OrderProps = {
  table: string
  products: ProductProps[]
}

export const OrderRepository = {
  async listAll() {
    const order = Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product')

    return order
  },

  async create({table,products}: OrderProps) {
    const product = await Order.create({table, products})
    return product
  },

  async changeStatus(orderId: string, status: string) {
    const order = await Order.findByIdAndUpdate(orderId, {status})
    return order
  },

  async cancel(orderId: string) {
    const order = await Order.findByIdAndDelete(orderId)
    return order
  }
}
