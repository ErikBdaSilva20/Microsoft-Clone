import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  .slide,
  .carousel-control-prev,
  .carousel-control-next {
    top: 300px;
  }
`

export const CarouselContent = styled.div`
  position: absolute;
  top: 50px;
  width: 30%;
  margin-left: 5%;

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
  }

  button {
    background-color: #0067b8;
    color: #fff;
    padding: 10px 12px;
    font-weight: 500;
    border: none;
  }

  a {
    font-size: 1.2rem;
    margin-left: 600%;
  }
`
