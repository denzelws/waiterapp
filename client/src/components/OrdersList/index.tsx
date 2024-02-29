import svgArrow from '../../assets/images/arrow-down.svg'
import { Order } from '../../types/Order'
import { ordersMock } from './mock'

import * as S from './styles'

const orders: Order[] = [
  {
  "_id": "65b9848446f7b92fc666dc08",
  "table": "123",
  "status": "IN_PRODUCTION",
  "products": [
    {
      "product": {
        "name": "Pizza de quatro queijos",
        "imagePath": "1706636841353-quatro-queijos.png",
        "price": 40,
        "ingredients": [
          {
            "icon": "🧀",
            "name": "Mussarela",
            "_id": "65b9362987370f7226003178"
          },
          {
            "icon": "🧀",
            "name": "Parmesão",
            "_id": "65b9362987370f7226003179"
          },
          {
            "icon": "🧀",
            "name": "Cheddar",
            "_id": "65b9362987370f722600317a"
          },
          {
            "icon": "🧀",
            "name": "Brie",
            "_id": "65b9362987370f722600317b"
          }
        ],
      },
      "quantity": 2,
      "_id": "65b9848446f7b92fc666dc09"
    },
    {
      "product": {
        "name": "Coca cola",
        "price": 7,
        "ingredients": [],
      },
      "quantity": 2,
      "_id": "65b9848446f7b92fc666dc0a"
    },
  ],
},
{
  "_id": "65b9848446f7b92fc666dc08",
  "table": "321",
  "status": "IN_PRODUCTION",
  "products": [
    {
      "product": {
        "name": "Pizza de quatro queijos",
        "imagePath": "1706636841353-quatro-queijos.png",
        "price": 40,
        "ingredients": [
          {
            "icon": "🧀",
            "name": "Mussarela",
            "_id": "65b9362987370f7226003178"
          },
          {
            "icon": "🧀",
            "name": "Parmesão",
            "_id": "65b9362987370f7226003179"
          },
          {
            "icon": "🧀",
            "name": "Cheddar",
            "_id": "65b9362987370f722600317a"
          },
          {
            "icon": "🧀",
            "name": "Brie",
            "_id": "65b9362987370f722600317b"
          }
        ],
      },
      "quantity": 2,
      "_id": "65b9848446f7b92fc666dc09"
    },
    {
      "product": {
        "name": "Coca cola",
        "price": 7,
        "ingredients": [],
      },
      "quantity": 2,
      "_id": "65b9848446f7b92fc666dc0a"
    }
  ],
},
]

const OrdersList = () => {
  return (
    <S.Wrapper>
      <S.Grid>
        {orders.map((order, i) => (
          <S.Card key={i}>
            {order.products.map(({ product, quantity }, i) => {
              const { name: title, ingredients } = product;
              return (
                <div key={i}>
                  <S.Title>
                    <S.Span>{quantity}</S.Span>
                    {title}
                  </S.Title>
                  <S.IngredientsWrapper>
                    {ingredients.map(({ name }, i) => (
                      <S.Box key={i}>
                        <S.Ingredients>{name}</S.Ingredients>
                      </S.Box>
                    ))}
                  </S.IngredientsWrapper>
                </div>
              );
            })}
          </S.Card>
        ))}
      </S.Grid>

      <S.ShowMore>
        <span>Mostrar Mais</span>
        <S.DownArrow src={svgArrow} alt='Arrow Down Icon' />
      </S.ShowMore>
    </S.Wrapper>
  );
}

export default OrdersList;
