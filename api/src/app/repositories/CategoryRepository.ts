import { Category } from '../models/Category'
import { Product } from '../models/Product'

export type CategoryProps = {
  icon: string
  name: string
}

export const CategoryRepository = {
  async listAll() {
    const categories = await Category.find()
    return categories
  },

  async listProductsByCategory(categoryId: string) {
    const products = await Product.find().where('category').equals(categoryId)
    return products
  },

  async create({icon,name}: CategoryProps) {
    const category = await Category.create({icon, name})
    return category
  }
}
