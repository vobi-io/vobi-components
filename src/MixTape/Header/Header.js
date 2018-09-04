import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


import SearchIcon from '../../../assets/svg/MixTape/search.svg'
import DotsIcon from '../../../assets/svg/MixTape/ellipsis.svg'
import TwitterIcon from '../../../assets/svg/MixTape/twitter-logo.svg'
import FacebookIcon from '../../../assets/svg/MixTape/facebook-app-logo.svg'
import InstagramIcon from '../../../assets/svg/MixTape/instagram-logo.svg'
import YoutubeIcon from '../../../assets/svg/MixTape/youtube.svg'
import BurgerIcon from '../../../assets/svg/MixTape/burger.svg'
import { Head } from 'glamorous';


const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #ffffff;
  font-size: 16px;
  ${p => p.bottomBorder === true && 'border-bottom: 1px solid #E7E7E7'};
`
const ContentContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
const LeftSide = styled.div`
  display: flex;
  align-items: flex-end;
`

const RightSide = styled.div`
  display: flex;
  align-items: flex-end;
`

const NavBar = styled.nav`
  display: flex;
  align-items: flex-end;
`
const Ul = styled.ul`
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  display: flex;
`
const Li = styled.li`
  padding-bottom: 35px;
  color: grey;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1.5px;
  border-bottom: ${props => (props.active ? '2px solid orange' : null)};
  :not(:last-child) {
    margin-right: 10px;
  }
`
const OrangeContainer = styled.div`
  display: flex;
  margin-bottom: 37px;
`
const Span = styled.span`
  color: orange;
  font-weight: 600;
  margin-left: 20px;
  letter-spacing: 1.5px;
`
const Logo = styled.img`
  height: 50px;
  padding-bottom: 20px;
  margin-right: 20px;
`
const Search = styled.img`
  width: 20px;
  margin-bottom: 35px;
  cursor: pointer;
`
const Dots = styled.img`
  width: 10px;
  margin-bottom: 41px;
  margin-left: 30px;
  margin-right: 10px;
  cursor: pointer;
`
const ContactUsContainer = styled.div`
  border: 1px solid orange;
  border-radius: 15px;
  margin-left: 20px;
`
const ContactUs = styled.span`
  padding: 0px 5px;
  color: orange;
  font-weight: 600;
  letter-spacing: 1.5px;
`
const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 38px;
  margin-left: 10px;
`
const SocialIcon = styled.img`
  height: 20px;
  margin-left: 20px;
  ${props => props.facebook && 'height: 17px;'}
  ${props => props.youtube && 'height: 22px;'}
`
const Burger = styled.img`
  width: 19px;
  margin-bottom: 36px;
  margin-right: 40px;
  cursor: pointer;
`

const Header = props => (
  <HeaderContainer bottomBorder={props.bottomBorder}>
    <ContentContainer>
      <LeftSide>
        <Burger src={BurgerIcon} alt="burger" />
        <Logo src="http://www.mixtapemadness.com/assets/images/logo-full.png" alt="logo" />
        <NavBar>
          <Ul>
            <Li active>Music</Li>
            <Li>News</Li>
            <Li>Events</Li>
            <Li>Video</Li>
          </Ul>
        </NavBar>
        <Dots src={DotsIcon} alt="dots" />
        <Search src={SearchIcon} alt="search" />
      </LeftSide>
      <RightSide>
        <OrangeContainer>
          <Span>Upload</Span>
          <Span>Register</Span>
          <Span>Log In</Span>
          <ContactUsContainer>
            <ContactUs>Contact Us</ContactUs>
          </ContactUsContainer>
        </OrangeContainer>
        <SocialIconsContainer>
          <SocialIcon src={TwitterIcon} alt="twitter" />
          <SocialIcon src={FacebookIcon} facebook alt="facebook" />
          <SocialIcon src={InstagramIcon} facebook alt="insta" />
          <SocialIcon src={YoutubeIcon} youtube alt="youtube" />
        </SocialIconsContainer>
      </RightSide>
    </ContentContainer>
  </HeaderContainer>
)

Header.propTypes = {
  bottomBorder: PropTypes.bool,
}

Header.defaultProps = {
  bottomBorder: false,
}

export default Header
