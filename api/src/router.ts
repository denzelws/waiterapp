import path from 'node:path'
import multer from 'multer'

import { Router } from 'express'
import { createCategory, indexCategory, indexProductByCategory } from './app/controllers/CategoryController'
import { createProduct, indexProduct } from './app/controllers/ProductController'
import { cancelOrder, changeOrderStatus, createOrder, indexOrder } from './app/controllers/OrderController'

export const router = Router()

const upload = multer({
  storage: multer.diskStorage({
    destination(req,file,callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename(req,file,callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    }
  })
})

// List categories
router.get('/categories', indexCategory)

// Create categories
router.post('/categories', createCategory)

// List products
router.get('/products', indexProduct)

// Create products
router.post('/products', upload.single('image'), createProduct)

// Get product by category
router.get('/categories/:categoryId/products', indexProductByCategory)

// List orders
router.get('/orders', indexOrder)

// Create order
router.post('/orders', createOrder)

// Change order status
router.patch('/orders/:orderId', changeOrderStatus)

// Delete/cancel order
router.delete('/orders/:orderId', cancelOrder)
