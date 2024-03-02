import xcloseicon from '../../../src/assets/images/close-icon.svg'
import * as S from './styles'

type OrderModalProps = {
  isOpen: boolean
  onClose: () => void
}

const OrderModal = ({isOpen, onClose}: OrderModalProps) => {
  return isOpen ? (
    <S.Wrapper>
      <S.ModalWrapper>
        <S.ModalHeader>
          <S.HeaderTitle>Mesa 02</S.HeaderTitle>
          <S.CloseIcon
            src={xcloseicon}
            alt='Ícone em x para fechar elemento'
            onClick={onClose}
          />
        </S.ModalHeader>

        <S.StatusWrapper>
          <S.StatusTitle>Status do pedido</S.StatusTitle>
          <S.StatusInfo>🕵️‍♂ Em produção</S.StatusInfo>
        </S.StatusWrapper>

        <S.ItemsWrapper>
          <S.ItemListHeader>Itens</S.ItemListHeader>
          <S.BoxItems>
            <S.Item>
              <S.ItemImage>imagem</S.ItemImage>

              <S.ItemDetails>
                <S.Quantity>1x</S.Quantity>

                <S.ItemInfo>
                <S.ItemName>Frango</S.ItemName>
                <S.ItemPrice>R$40,00</S.ItemPrice>
                </S.ItemInfo>
              </S.ItemDetails>
            </S.Item>
          </S.BoxItems>
        </S.ItemsWrapper>
      </S.ModalWrapper>
    </S.Wrapper>
  ) : null
}

export default OrderModal
