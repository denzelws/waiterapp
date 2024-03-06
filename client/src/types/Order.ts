type Product = {
  name: string
  imagePath?: string
  price: number
  ingredients: {
    _id: string
    icon: string
    name: string
  }[]
}

type Products = {
  _id: string,
  quantity: number
  product: Product
}

export interface Order {
  _id: string
  table: string
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
  products: Products[]
}
