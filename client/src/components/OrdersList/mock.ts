import { Order } from "../../types/Order"

export const ordersMock: Order[] = [
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
