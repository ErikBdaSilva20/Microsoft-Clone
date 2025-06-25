import styled from 'styled-components'

export const Container = styled.div``

export const LinksSection = styled.section`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 80px 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      height: 40px;
    }
    a {
      color: #0067b8;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`
