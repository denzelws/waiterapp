import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


    ${HeaderBoxInfo} {
      background: ${props => props.color};
    }
`
