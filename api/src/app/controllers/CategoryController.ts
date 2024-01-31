import { Request, Response } from 'express'
import { CategoryRepository } from '../repositories/CategoryRepository'

export const indexCategory = async (req: Request, res: Response) => {
  const categories = await CategoryRepository.listAll()
  res.json(categories)
}

export const indexProductByCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params

  const products = await CategoryRepository.listProductsByCategory(categoryId)
  res.json(products)
}

export const createCategory = async (req: Request, res: Response) => {
  const { icon, name } = req.body

  const category = await CategoryRepository.create({icon, name})
  res.json(category)
}
