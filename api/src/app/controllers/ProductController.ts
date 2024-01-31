import { Request, Response } from 'express'
import { ProductRepository } from '../repositories/ProductRepository'

export const indexProduct = async (req: Request,res: Response) => {
  const products = await ProductRepository.listAll()
  res.json(products)
}

export const createProduct = async (req: Request,res: Response) => {
  const { name, description, price, category, ingredients } = req.body

  const imagePath = req.file!.filename
  const parsedIngredients = ingredients ? JSON.parse(ingredients) : []
  const product = await ProductRepository.create({name, description, price, imagePath, category, ingredients: parsedIngredients})

  res.json(product)
}
