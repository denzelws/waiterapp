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
  border-top: 0.1rem solid;
  width: 100%;
  max-width: 23.7rem;
  height: 13rem;
  background: #9E9898;
  margin-bottom: 1rem;
  border-radius: 2rem 2rem 0 0;
  position: relative;
  overflow: hidden;

  // closing effect
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
  }

  &:nth-child(odd) {
    &:before {
      background-color: green;
    }
  }

  &:nth-child(even) {
    &:before {
      background-color: red;
    }
  }
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
