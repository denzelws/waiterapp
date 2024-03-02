import { useState } from 'react'
import svgArrow from '../../assets/images/arrow-down.svg'
import { ordersMock } from './mock'

import * as S from './styles'
import OrderModal from '../OrderModal'

const OrdersList = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <S.Wrapper>
      <S.Grid>
        {ordersMock.map((order, i) => (
          <S.Card key={i} onClick={handleOpenModal}>
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

      <OrderModal isOpen={isOpen} onClose={handleCloseModal}/>
    </S.Wrapper>
  );
}

export default OrdersList;
