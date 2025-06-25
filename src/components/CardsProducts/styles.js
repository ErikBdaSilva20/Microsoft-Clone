import styled from 'styled-components'

export const Container = styled.section``

export const ForBusiness = styled.h4`
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 0 5%;
  margin-left: 12.3%;
`

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WrapperCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  max-width: 1500px;

  margin: 0 auto;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`

export const Card = styled.div`
  width: 18rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  box-shadow: 0 0.1875rem 0.4375rem 0 rgba(0, 0, 0, 0.13),
    0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.11);

  .new {
    color: #000;
    font-weight: 700;
    background-color: orange;
    padding: 2px 10px;
    border-radius: 1px;
    font-size: 0.8rem;
    max-width: 50px;
  }
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
`
