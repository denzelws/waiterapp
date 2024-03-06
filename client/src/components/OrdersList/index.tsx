import { useState } from 'react'
import { ordersMock } from './mock'
import svgArrow from '../../assets/images/arrow-down.svg'
import OrderModal from '../OrderModal'

import * as S from './styles'
import { Order } from '../../types/Order'

const OrdersList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null)

  const handleOpenModal = (order: Order) => {
    setIsOpen(true)
    setSelectedOrder(order)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <S.Wrapper>
      <S.Grid>
        {ordersMock.map((order, i) => (
          <S.Card key={i} onClick={() => handleOpenModal(order)}>
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

      <OrderModal isOpen={isOpen} onClose={handleCloseModal} order={selectedOrder}/>
    </S.Wrapper>
  );
}

export default OrdersList;
