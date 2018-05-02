/* eslint react/prop-types:0 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './styles.scss'

const Navbar = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 25px 0px 25px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.27);
  background-color: white;
`
const BrandName = styled.span`
  font-size: 18px;
  font-weight: bold;
`
const Link = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: gray;
  transition: 0.2s;
  &:hover {
    color: green;
  }
`
const NavItem = styled.li`
  float: left;
  padding: 22px 15px;
`

const Nav = styled.ul`
  list-style: none;
  margin-right: 20px;
  display: block;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavBar = props => (
  <Navbar>
    <Wrapper>
      <BrandName>Brand Name</BrandName>
    </Wrapper>
    <Wrapper>
      <Nav>
        {props.pages.map(item => (
          <NavItem key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </NavItem>
        ))}
      </Nav>
    </Wrapper>
  </Navbar>
)

NavBar.defaultProps = {
  pages: [],
}

NavBar.propTypes = {
  pages: PropTypes.array,
}

export default NavBar
