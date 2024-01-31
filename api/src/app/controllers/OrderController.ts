import { Request, Response } from 'express'
import { OrderRepository } from '../repositories/OrderRepository'

export const indexOrder = async (req: Request,res: Response) => {
  const orders = await OrderRepository.listAll()
  res.status(201).json(orders)
}

export const createOrder = async (req: Request,res: Response) => {
  const { table, products } = req.body
  const order = await OrderRepository.create({table, products})

  res.status(201).json(order)
}
