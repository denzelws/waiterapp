import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 103rem;
  margin: 4.8rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  ${media.lessThan("medium")`
    display: none;
  `}
  `

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const HeaderBoxInfo = styled(HeaderWrapper)`
  padding: 2.4rem;
  width: 26rem;
  height: 6.8rem;
  border-radius: 1.6rem;
  background: inherit;
`

export const Box = styled.div`
   &:nth-child(1) {
    ${HeaderBoxInfo} {
      background: #FFD954;
    }
  }

  &:nth-child(2) {
    ${HeaderBoxInfo} {
      background: #FF5454;
    }
  }

  &:nth-child(3) {
    ${HeaderBoxInfo} {
      background: #9FFF54;
    }
  }
`

export const BoxInfo = styled.div``

