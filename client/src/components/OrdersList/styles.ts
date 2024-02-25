import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Grid = styled.div`
  width: 100%;
  max-width: 103rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.8rem;
  padding: 6.4rem 2.6rem 2.6rem;
  margin: 0 auto;

  ${media.greaterThan('medium')`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`


export const Card = styled.div`
  border: 0.1rem solid yellow;
  width: 100%;
  height: 13rem;
  margin-bottom: 1rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const ShowMore = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6.4rem;
  margin: 0 auto 9rem;
  border: none;
  background: transparent;
`

export const DownArrow = styled.img`
  width: 3rem;
  height: 3rem;
`
