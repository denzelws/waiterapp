import { Product } from '../models/Product'

export type ProductProps = {
  name: string
  description: string
  imagePath: string
  price: number
  ingredients: IngredientsProps[]
  category: string
}

type IngredientsProps = {
  icon: string
  name: string
}

export const ProductRepository = {
  async listAll() {
    const products = await Product.find()
    return products
  },

  async create({name, description, imagePath, price, category, ingredients}: ProductProps) {
    const product = await Product.create({
      name,
      description,
      imagePath,
      category,
      price: Number(price),
      ingredients
    })

    return product
  }
}
