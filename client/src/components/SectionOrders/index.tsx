import OrderBox from '../OrderBox'
import { ordersData } from './mock'

import * as S from './styles'

const colors = ['#FFD954', '#FF5454', '#9FFF54']

const SectionOrders = () => {
  return (
    <S.Wrapper>
      {ordersData.map((order, index) => (
        <OrderBox key={index} {...order} color={colors[index % colors.length]}/>
      ))}
    </S.Wrapper>
  )
}

export default SectionOrders
