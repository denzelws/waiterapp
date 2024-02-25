import svgArrow from '../../assets/images/arrow-down.svg'

import * as S from './styles'
const OrdersList = () => {
  return (
    <S.Wrapper>
      <S.Grid>
        <S.Column>
          <S.Card>1</S.Card>
          <S.Card>2</S.Card>
        </S.Column>

        <S.Column>
          <S.Card>3</S.Card>
          <S.Card>4</S.Card>
        </S.Column>

        <S.Column>
          <S.Card>5</S.Card>
          <S.Card>6</S.Card>
        </S.Column>

        <S.Column>
          <S.Card>7</S.Card>
          <S.Card>8</S.Card>
        </S.Column>
      </S.Grid>

      <S.ShowMore>
        <span>Mostrar Mais</span>
        <S.DownArrow
          src={svgArrow}
          alt='Arrow Down Icon'
        />
      </S.ShowMore>
    </S.Wrapper>
  )
}

export default OrdersList
