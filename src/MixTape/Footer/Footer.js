import React from 'react'
import styled from 'styled-components'

import AppStoreIcon from '../../../assets/svg/MixTape/appstore.png'
import GooglePlayIcon from '../../../assets/svg/MixTape/googleplay.png'


const FooterContainer = styled.footer`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor}`};
`
const ContentContainer = styled.div`
  padding: 40px 0px;
  max-width: 1200px;
  margin: auto;
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const ListContainer = styled.div`
  ${props => props.mr && `margin-right: ${props.mr}px`};
`
const ContentHeader = styled.span`
  color: black;
  font-size: 20px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 20px;
  color: #979797;
  font-size: 15px;
  font-weight: 600;
  list-style: none;
`
const ListItem = styled.li`
  text-transform: uppercase;
  margin-bottom: 15px;
  letter-spacing: 1px;
`
const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const UploadButton = styled.button`
  border: 1px solid black;
  width: 220px;
  height: 46px;
  background-color: transparent;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  margin-top: 20px;
`
const SocialContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 17px;
`
const SignUpContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`
const Input = styled.input`
  height: 42px;
  width: 150px;
  border: 1px solid black;
  padding-left: 15px;
  border-right: 0;
  outline: none;
  background-color: transparent;
`
const SignUpButton = styled.button`
  height: 46px;
  width: 100px;
  background-color: black;
  color: #ffffff;
  border: 1px solid black;
  border-left: none;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
`
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #979797;
  ${props => props.mr && `margin-right: ${props.mr}px;`}
  ${props => props.ml && `margin-left: ${props.ml}px;`}
  ${props => props.mt && `margin-top: ${props.mt}px;`}
  ${props => props.mb && `margin-bottom: ${props.mb}px;`}
`
const AppStore = styled.img`
  width: auto;
  height: 38px;
`
const GooglePlay = styled.img`
  width: auto;
  height: 38px;
`
const Flex = styled.div`
  display: flex;
`
const Span = styled.span`
  ${props => props.fsize && `font-size: ${props.fsize}px`};
  ${props => props.color && `color: ${props.color}`};
  ${props => props.mr && `margin-right: ${props.mr}px;`}
  ${props => props.ml && `margin-left: ${props.ml}px;`}
  ${props => props.mt && `margin-top: ${props.mt}px;`}
  ${props => props.mb && `margin-bottom: ${props.mb}px;`}
`
const Anchor = styled.a`
  outline: none;
  text-decoration: none;
`

const Footer = () => (
  <FooterContainer backgroundColor="#eeeeee">
    <ContentContainer>
      <FlexDiv>
        <ListContainer>
          <ContentHeader>Music</ContentHeader>
          <List>
            <ListItem>Artists</ListItem>
            <ListItem>Mixtapes</ListItem>
            <ListItem>Singles</ListItem>
            <ListItem>Hip Hop</ListItem>
            <ListItem>Drill</ListItem>
            <ListItem>Rap</ListItem>
            <ListItem>Trap</ListItem>
            <ListItem>Grime</ListItem>
            <ListItem>All Genres</ListItem>
          </List>
        </ListContainer>
        <ListContainer>
          <ContentHeader>Mixtape Madness</ContentHeader>
          <List>
            <ListItem>About</ListItem>
            <ListItem>Company</ListItem>
            <ListItem>Help</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>Press</ListItem>
            <ListItem>FAQ</ListItem>
          </List>
        </ListContainer>
        <UploadContainer>
          <ContentHeader>For Artists</ContentHeader>
          <UploadButton>Upload to mm</UploadButton>
        </UploadContainer>
        <div style={{ maxWidth: '280px' }}>
          <ContentHeader>Sign up for our newsletter</ContentHeader>
          <SignUpContainer>
            <Input placeholder="email@example.com" />
            <SignUpButton>SIGN UP</SignUpButton>
          </SignUpContainer>
          <ContentHeader>Connect with Mixtape Madness</ContentHeader>
          <SocialContainer>
            <img alt="soc" />
            <img alt="soc" />
            <img alt="soc" />
            <img alt="soc" />
            <img alt="soc" />
            <img alt="soc" />
          </SocialContainer>
          <Line mb={10} />
          <FlexDiv>
            <Anchor href="/"><AppStore src={AppStoreIcon} /></Anchor>
            <Anchor href="/"><GooglePlay src={GooglePlayIcon} /></Anchor>
          </FlexDiv>
        </div>
      </FlexDiv>
      <Line mt={20} mb={20} />
      <FlexDiv>
        <div>
          <Span fsize={15} color="black" >Mixtape Madness</Span>
        </div>
        <Flex>
          <Span fsize={15} color="black" >Help</Span>
          <Span fsize={15} color="black" ml={10} >Terms</Span>
          <Span fsize={15} color="black" ml={10} >Privacy</Span>
        </Flex>
      </FlexDiv>
    </ContentContainer>
  </FooterContainer>
)

export default Footer
