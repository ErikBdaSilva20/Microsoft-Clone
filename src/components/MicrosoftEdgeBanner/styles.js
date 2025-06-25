import styled from 'styled-components'

export const Container = styled.section`
  padding: 0 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  margin: 50px 0;

  img {
    width: 100%;
    max-width: 1500px;
  }
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`

export const Card = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0 0.1875rem 0.4375rem 0 rgba(0, 0, 0, 0.13),
    0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.11);

  background-color: #fff;

  z-index: 10;
  top: 30%;
  left: 15%;
  padding: 10px;

  position: absolute;
`

export const CardTitle = styled.h3`
  margin-top: 15px;
`

export const CardText = styled.p`
  margin-top: 10px;
`

export const Link = styled.a`
  border-radius: 0;
  border: none;
  background-color: rgb(0, 67, 139);

  margin-bottom: 20px;
  margin-left: 20px;
  max-width: 50%;
`
