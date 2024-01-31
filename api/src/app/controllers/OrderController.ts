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

export const changeOrderStatus = async (req: Request,res: Response) => {
  const { orderId } = req.params
  const { status } = req.body

  if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
    return res.status(400).json({
      error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE.'
    })
  }

  await OrderRepository.changeStatus(orderId, status)
  res.sendStatus(204)
}

export const cancelOrder = async (req: Request,res: Response) => {
  const { orderId } = req.params
  await OrderRepository.cancel(orderId)

  res.sendStatus(204)
}
