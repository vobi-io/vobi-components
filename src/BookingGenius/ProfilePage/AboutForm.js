import React, { Component } from 'react'
import styled from 'styled-components'
import FbLogo from '../../../assets/svg/BookingGenius/FbLogo.svg'
import TwitterLogo from '../../../assets/svg/BookingGenius/TwitterLogo.svg'

const Container = styled.div`
    margin-top:17px;
    width: 838px;
    height:260px;
    padding: 0px 24px;
    background-color: #ffffff;
    box-sizing: border-box;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
    display:flex;
    flex:1;
    flex-direction: column;
    justify-content:flex-start;
`
const About = styled.div`
    width: 102px;
    height: 66px;
    font-family: Raleway;
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 3;
    letter-spacing: normal;
    text-align: left;
    color: #2f3033;
`
const IconsWrappers = styled.div`
    display:flex;
    width: 120px;
    height: 32px;
    margin-top:25px;
    flex-direction:row;
    justify-content: space-between;
`
const Icon = styled.img`
    width: 31.8px;
    height: 31.3px;
    border-radius:25px;
    background-color: #06c953;
`

const Description = styled.div`
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #2f3033
`
// const description = "Hello!My name is Nick Johnson, I'm a singer from New York.During my career I have been responsible for user-centred experience & interface consistency of sites and applications for both web and mobile devices.I'm in love with making unique and fresh-looking design for easy-to-use products."

const AboutForm = props => (
  <Container>
    <About>
        About Me
    </About>
    <Description>
      Hello! <br />
      My name is Nick Johnson, I'm a singer from New York.<br /><br />
      During my career I have been responsible for user-centred experience & interface consistency of sites and applications for both web and mobile devices.
      I'm in love with making unique and fresh-looking design for easy-to-use products.
    </Description>
    <IconsWrappers>
      <Icon src={FbLogo} />
      <Icon src={TwitterLogo} />
      <Icon src={FbLogo} />
    </IconsWrappers>
  </Container>
)

export default AboutForm
