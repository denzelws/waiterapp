import express from 'express'
import mongoose from 'mongoose'

const app = express()

mongoose.connect('mongodb://localhost:27017')
  .then(() => console.log('Conectado ao mongo'))
  .catch(() => console.log('erro'))

const port = 3001

app.listen(port, () => {
  console.log(`🚀 Server is running on http:localhost://${port}`)
})

