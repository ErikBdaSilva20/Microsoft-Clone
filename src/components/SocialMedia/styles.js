import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;

  margin-top: 80px;
`

export const Li = styled.li`
  font-size: 15px;
  font-weight: 600;

  img {
    height: 30px;
  }

  p {
    margin-top: 15px;
  }
`
export const GoToStart = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 30px;
  margin-top: 150px;
  margin-bottom: 50px;

  a {
    cursor: pointer;
    padding: 0.6rem 0.75rem;
    background-color: rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    border-radius: 4px;
    gap: 10px;
  }

  .arrow {
    width: 20px;
    height: 30px;
  }

  &.fixed {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 1000;
  }
`
