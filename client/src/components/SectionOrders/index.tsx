import * as S from './styles'

const SectionOrders = () => {
  return (
    <S.Wrapper>
      <S.Box>
        <S.HeaderWrapper>
          <span>-</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </S.HeaderWrapper>

        <S.HeaderBoxInfo>
          <span>🙄</span>
          <strong>Contando os minutos</strong>
        </S.HeaderBoxInfo>
      </S.Box>

      <S.Box>
        <S.HeaderWrapper>
          <span>-</span>
          <strong>Em produção</strong>
          <span>(1)</span>
        </S.HeaderWrapper>

        <S.HeaderBoxInfo>
          <span>🕵️‍♂</span>
          <strong>Espiando o forno</strong>
        </S.HeaderBoxInfo>
      </S.Box>

      <S.Box>
        <S.HeaderWrapper>
          <span>-</span>
          <strong>Pronto</strong>
          <span>(1)</span>
        </S.HeaderWrapper>

        <S.HeaderBoxInfo>
          <span>🎉</span>
          <strong>Seu presente chegou</strong>
        </S.HeaderBoxInfo>
      </S.Box>
    </S.Wrapper>
  )
}

export default SectionOrders
