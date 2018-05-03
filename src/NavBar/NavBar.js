/* eslint react/prop-types:0 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ChatIcon from '../../assets/svg/navbar/Chat.svg'
import NotificationIcon from '../../assets/svg/navbar/Notification.svg'

const Navbar = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 50px 0px 50px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.27);
  background-color: white;
`
const BrandName = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #2f3033;
`
const NavLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #2f3033;
  transition: 0.2s;
  &:hover {
    color: #06c953;
  }
`
const NavItem = styled.li`
  float: left;
  padding: 22px 15px;
`
const NavItemRegister = styled(NavItem)`
  padding-right: 0;
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

const Register = styled(NavLink)`
  border: solid 3px #2f3033;
  padding: 10px 33px;
  &:hover {
    color: #06c953;
    border-color: #06c953;
  }
`

const RegisterMenu = styled(Nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 0;
`

const UserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
`

const Icon = styled.img`
  margin-right: 15px;
`
const AvatarContainer = styled.div`
  margin-right: 16px;
  position: relative;
  :before {
    content:" ";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 4px 0 4px;
    border-color: #615b57 transparent transparent transparent;
    position: absolute;
    right: -15px;
    top: 19px;
  }
  &:hover:before {
    border-color: #06c953 transparent transparent transparent;
  }
`
const Avatar = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
`

const NavBar = props => (
  <Navbar>
    <Wrapper>
      <BrandName>{props.brandName}</BrandName>
      {props.leftPages &&
        <Nav>
          {props.leftPages.map(item => (
            <NavItem key={item.title}>
              <NavLink href={item.href}>{item.title}</NavLink>
            </NavItem>
          ))}
        </Nav>
      }
    </Wrapper>
    <Wrapper>
      {props.rightPages &&
        <Nav>
          {props.rightPages.map(item => (
            <NavItem key={item.title}>
              <NavLink href={item.href}>{item.title}</NavLink>
            </NavItem>
          ))}
        </Nav>
      }
      {!props.user ? (
        <RegisterMenu>
          <NavItem>
            <NavLink href="#login">Login</NavLink>
          </NavItem>
          <NavItemRegister>
            <Register href="#login">Sign up</Register>
          </NavItemRegister>
        </RegisterMenu>
      ) : (
        <UserMenu>
          <Icon src={ChatIcon} alt="" />
          <Icon src={NotificationIcon} alt="" />
          <AvatarContainer>
            <Avatar src={props.user.avatar} alt="" />
          </AvatarContainer>
        </UserMenu>
      )}
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
