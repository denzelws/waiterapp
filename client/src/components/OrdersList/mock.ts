export type OrdersListProps = {
  title: string
  ingredients: Array<string>
  number: number
}

export const ordersMock: OrdersListProps[] = [
  { title: 'Marguerita', ingredients: ['Queijo', 'Tomate', 'Tomate'], number: 1 },
  { title: 'Calabresa', ingredients: ['Mussarela', 'Azeitona'], number: 2 },
  { title: '4 queijos', ingredients: ['Calabresa', 'Cebola'], number: 3 },
  { title: 'Portuguesa', ingredients: ['Frango', 'Catupiry'], number: 4 },
  { title: '4 queijos', ingredients: ['Calabresa', 'Cebola'], number: 5 },
  { title: 'Portuguesa', ingredients: ['Frango', 'Catupiry'], number: 6 },
  { title: '4 queijos', ingredients: ['Calabresa', 'Cebola'], number: 7 },
  { title: 'Portuguesa', ingredients: ['Frango', 'Catupiry'], number: 8 }
]
