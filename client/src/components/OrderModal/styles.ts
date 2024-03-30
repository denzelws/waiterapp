import styled from "styled-components"

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(0.45rem);
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalWrapper = styled.div`
  background: #ffffff;
  width: 33.5rem;
  padding: 3.2rem;
  border-radius: 0.8rem;
`

export const ModalHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
`

export const HeaderTitle = styled.h3`
  font-weight: bold;
  font-size: 2rem;
`

export const CloseIcon = styled.img`
width: 3rem;
cursor: pointer;
`

export const StatusWrapper = styled.div`
  margin-top: 3.2rem;
`

export const StatusTitle = styled.small`
  font-size: 1.6rem;
  color: #333333;
  opacity: 0.8;
`

export const StatusInfo = styled.h3`
  color: #333333;
  font-weight: 600;
  font-size: 1.5rem;
`

export const ItemsWrapper = styled.div`
margin-top: 1.5rem;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 3.2rem;

  span {
    margin-right: 0.8rem;
  }
  
  button {
    padding: 1.1rem 2.4rem;
    border-radius: 4.8rem;
    font-size: 1.6rem;

    &:first-of-type {
      background: #333333;
      color: #FFFFFF;
    }

    &:last-of-type {
      background: transparent;
      color: #D73035;
      border: none;
    }
  }
`

export const BoxItems = styled.div``

export const Items = styled.div`
margin-top: 1.5rem;
`

export const Total = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 2.4rem;

span {
  font-size: 1.4rem;
  color: #666;
  font-weight: 500;
  opacity: 0.8;
}

strong {
  font-size: 1.6rem;
  font-weight: 600;
  color: #333333;
}
`

export const Item = styled.div`
  display: flex;

  img {
    border-radius: 0.6rem;
  }

  span {
    color: #666;
    font-size: 1.4rem;
    display: block;
    min-width: 2rem;
    margin-left: 1.2rem;
  }

  & + & {
    margin-top: 1.6rem;
  }
`

export const ProductDetails = styled.div`
  margin-left: 0.4rem;

  strong {
    display: block;
    margin-bottom: 0.3rem;
    
    &:first-of-type {
      font-size: 1.6rem;
      font-weight: 600;
    }

    &:last-of-type {
      font-size: 1.4rem;
      color: #666;
    }
  }
`

export const ItemImage = styled.div`
height: 100%;
`

export const OrderItems = styled.div`
`

export const ItemInfo = styled.div`
display: flex;
flex-direction: column;
`

export const ItemListHeader = styled.small`
  color: #333333;
  opacity: 0.8;
  font-size: 1.6rem;
`

export const Quantity = styled.span`
  font-size: 1.4rem;
  color: #333333;
  opacity: 0.8;
`

export const ItemName = styled.h3`
  color: #333333;
  font-weight: 600;
  font-size: 1.5rem;
`

export const ItemPrice = styled.span`
  font-size: 1.6rem;
  color: #333333;
  opacity: 0.8;
`
