import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.section`
 ${media.greaterThan("medium")`
    display: none;
  `}

  .slick-prev,
  .slick-next {
    cursor: pointer;
    position: absolute;
    width: 2.5rem;
    top: 50%;
  }

  .slick-prev {
    left: 2rem;
    z-index: 20;
  }

  .slick-next {
    right: 2rem;
  }
`

export const Slide = styled.div``
