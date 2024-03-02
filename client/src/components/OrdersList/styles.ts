import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Grid = styled.div`
  width: 100%;
  max-width: 103rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.8rem;
  padding: 6.4rem 2.6rem 2.6rem;
  margin: 0 auto;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.6rem;
  padding-top: 2rem;
  display: flex;
  align-items: center;
`

export const IngredientsWrapper = styled.ul`
  height: max-content;
  max-height: 50rem;
  list-style-type: none;
`

export const Ingredients = styled.li`
  font-size: 1.5rem;
  font-weight: 500;
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.5);
  margin-bottom: 0.8rem;
  width: 90%;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
`

export const Span = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 1rem 1.4rem 0.8rem 0;
`

export const Card = styled.div`
  border-top: 0.1rem solid;
  width: 100%;
  min-height: 13rem;
  background: #eaeaea;
  margin-bottom: 1rem;
  border-radius: 2rem 2rem 0 0;
  position: relative;
  overflow: hidden;
  padding: 4rem 1rem 0.6rem 1.4rem;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15%;
    z-index: 20;
  }

  &:nth-child(odd) {
    &:before {
      background-color: #9fff54;
    }
  }

  &:nth-child(even) {
    &:before {
      background-color: #ff5454;
    }
  }
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
