import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CloseIcon from '../../../assets/svg/BookingGenius/Close.svg'

import { Modal, Rating, Button, TextField } from '../../'

const styles = {
  overlay: {
    backgroundColor: 'rgb(216, 216, 216, 0.5)',
    border: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 12px 0 rgba(0, 0, 0, 0.21)',
    border: 0,
    borderRadius: 0,
    position: 'relative',
    padding: 25,
    width: 711,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 24px;
`
const Footer = styled.div`
  display: flex;
`
const Icon = styled.img`
  cursor: pointer;  
`
const Title = styled.span`
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #303030;
`
const SubTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #303030;
  margin-top: 15px;
  margin-bottom: 5px;
`
const Small = styled.div`
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #7c7c7c;
`
const TextFieldWrapper = styled.div`
  margin-top: 15px;
`
const SubmitWrapper = styled.div`
  margin-right: 15px;
`

const FeedbackModal = props => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.onRequestClose}
    styleOverlay={styles.overlay}
    styleContent={styles.content}
  >
    <Container>
      <Header>
        <Title>Provide feedback</Title>
        <Icon onClick={props.onRequestClose} src={CloseIcon} />
      </Header>
      <Content>
        <SubTitle>Overall Rating</SubTitle>
        <Rating />
        <SubTitle>Privte Talent feedback</SubTitle>
        <Small>This review will be published on the talent’s profile</Small>
        <TextFieldWrapper>
          <TextField
            multiLine
          />
        </TextFieldWrapper>
        <SubTitle>Prive Talent feedback</SubTitle>
        <Small>We will show it to the talent only</Small>
        <TextFieldWrapper>
          <TextField
            multiLine
          />
        </TextFieldWrapper>
      </Content>
      <Footer>
        <SubmitWrapper>
          <Button flat primary solid onClick={props.onRequestClose}>Provide</Button>
        </SubmitWrapper>
        <Button flat onClick={props.onRequestClose}>Cancel</Button>
      </Footer>
    </Container>
  </Modal>
)

FeedbackModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
}

FeedbackModal.defaultProps = {
  isOpen: false,
  onRequestClose: () => false,
}

export default FeedbackModal
