import React from 'react'
import styled from 'styled-components'


import PhoneImage from '../../../assets/svg/MixTape/phone.jpg'
import AppStoreIcon from '../../../assets/svg/MixTape/appstore.png'
import GooglePlayIcon from '../../../assets/svg/MixTape/googleplay.png'

const DownloadContainer = styled.div`
  max-width: 1200px;
  margin: 60px auto;
  background-image: url(${PhoneImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const ContentContainer = styled.div`
  padding: 100px 50px;
  width: 60%;
`
const Header = styled.span`
  font-size: 40px;
  color: white;
`
const SubHeader = styled.span`
  margin-top: 40px;
  font-size: 27px;
  color: white;
`
const DownloadButton = styled.button`
  background: transparent;
  width: 300px;
  border: 2px solid #FF9D00;
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-top: 40px;
  height: 45px;
  cursor: pointer;
`
const FlexDiv = styled.div`
  display: flex;
  margin-top: 40px;
`
const Icon = styled.img`
  width: auto;
  height: 38px;
  margin-right: 10px;
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
`

const Download = () => (
  <DownloadContainer>
    <ContentContainer>
      <Div>
        <Header>Keep Up To Date With The Latest News And Stream Brand New Music</Header>
        <SubHeader>The UK's No.1 Platform For Urban Music Download The App Now</SubHeader>
      </Div>
      <DownloadButton>Download</DownloadButton>
      <FlexDiv>
        <Icon src={AppStoreIcon} />
        <Icon src={GooglePlayIcon} />
      </FlexDiv>
    </ContentContainer>
  </DownloadContainer>
)

export default Download
