import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  background-color: #f2f2f2;
  flex-direction: row;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 150px;

    width: 100%;
  }
`

export const Ul = styled.ul`
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Li = styled.li`
  display: flex;
  font-size: 15px;
  font-weight: 600;

  img {
    height: 30px;
  }

  p {
    margin-top: 15px;
  }
  a {
    color: #000;
    text-decoration: none;
    font-weight: 400;
  }
  a:hover {
    color: #0067b8;
  }
`
