import styled from 'styled-components'
import media from 'styled-media-query'

export const Logo = styled.img`
  width: 7.9rem;
  height: 8rem;
  cursor: pointer;

  ${media.greaterThan('medium')`
  width: 6.9rem;
  height: 5rem;
  `}
`

export const Menu = styled.img`
  width: 4rem;
  height: 3.9rem;
  cursor: pointer;

  ${media.greaterThan('medium')`
  width: 3rem;
  `}
`

export const Wrapper = styled.header`
  height: 11.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  width: 100%;
  max-width: 134rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;
`
