import * as S from './styles'

export type OrderBoxProps = {
  title: string
  emoji: string
  description: string
  color?: string
}

const OrderBox = ({title, emoji, description, color}: OrderBoxProps) => {
  return (
    <S.Box color={color}>
      <S.HeaderWrapper>
        <span>-</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </S.HeaderWrapper>

      <S.HeaderBoxInfo>
        <span>{emoji}</span>
        <strong>{description}</strong>
      </S.HeaderBoxInfo>
    </S.Box>
  )
}

export default OrderBox
