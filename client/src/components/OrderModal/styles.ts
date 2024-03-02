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
margin-top: 3.2rem;
`

export const BoxItems = styled.div``

export const Item = styled.div`
display: flex;
align-items: center;
gap: 4rem;
`

export const ItemImage = styled.div`
height: 100%;
`

export const ItemDetails = styled.div`
display: flex;
gap: 1rem;
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
