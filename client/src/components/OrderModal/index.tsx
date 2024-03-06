import xcloseicon from '../../../src/assets/images/close-icon.svg'
import { Order } from '../../types/Order'
import * as S from './styles'

type OrderModalProps = {
  isOpen: boolean
  onClose: () => void
  order: Order | null
}

const OrderModal = ({isOpen, onClose, order}: OrderModalProps) => {
  return isOpen && order ? (
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
          <S.StatusTitle>
            {order.status === 'WAITING' && 'Contando os minutos'}
            {order.status === 'IN_PRODUCTION' && 'Espiando o forno'}
            {order.status === 'DONE' && 'Seu presente chegou'}
          </S.StatusTitle>
          <S.StatusInfo>
            {order.status === 'WAITING' && '🙄'}
            {order.status === 'IN_PRODUCTION' && '🕵️‍♀️'}
            {order.status === 'DONE' && '🎉'}
          </S.StatusInfo>
        </S.StatusWrapper>

        <S.ItemsWrapper>
          <S.ItemListHeader>Itens</S.ItemListHeader>

          <S.Item>
          {order.products.map(({_id, product, quantity}) => (
            <div key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />

                <span>{quantity}x</span>

                <div>
                  <strong>{product.name}</strong>
                  <strong>{`R$${product.price}.00`}</strong>
                </div>
              </div>
          ))}
          </S.Item>
        </S.ItemsWrapper>
      </S.ModalWrapper>
    </S.Wrapper>
  ) : null
}

export default OrderModal
