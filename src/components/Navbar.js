import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render () {
    return (
      <Nav>
        <Brand>JnJ Communications</Brand>
        <div>
          <ItemWrapper>
            <Item>Introduce</Item>
            <Link to="/stacks">
              <Item>What we used</Item>
            </Link>
            <Link to="/products">
              <Item>What we made</Item>
            </Link>
          </ItemWrapper>
        </div>
      </Nav>
    )
  }
}

const Nav = styled.nav`
  width: 100%;
  height: 8rem;
  float: right;
  display: block;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`

const Brand = styled.h1`
  font-family: 'Montserrat', sans-serif !important;
  font-size: 2rem;
  position: absolute;
  left: 70px;
  user-select: none;
  letter-spacing: -1px;
  margin: 0;
  cursor: default;

  @media (max-width: 1100px) {
    position: unset;
  }
`

const ItemWrapper = styled.ul`
  @media (max-width: 1100px) {
    display: none;
  }
`

const Item = styled.span`
  font-family: 'Montserrat', sans-serif !important;
  font-size: 1.3rem;
  margin-right: 70px;
  cursor: pointer;
  user-select: none;
`

export default Navbar
