import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Modal, Button, TextField } from '../..'

import FacebookIcon from '../../../assets/svg/BookingGenius/Facebook.svg'
import MailIcon from '../../../assets/svg/BookingGenius/Mail.svg'

const styles = {
  overlay: {
    backgroundColor: 'rgb(216, 216, 216, 0.48)',
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
    padding: '35px 40px 25px',
    width: '350px',
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}


const ModalHeader = styled.h1`
    text-align: center;
    font-size: 36px;
    margin: 0;
    padding: 0;
    margin-top: 10px;
  `

const Paragraph = styled.p`
    font-size: 24px;
    font-weight: 500;
    color: black;
    text-align: center;
    margin: 12px 0;
    padding: 0;
  `

const SecondaryHeader = styled.h3`
  font-size: 15px;
  margin-top: 15px;
  color: black;
  text-align: center;
  margin: 0;
  padding: 0;
  font-weight: 600;
  margin-bottom: 10px;
`

const ButtonText = styled.span`
    font-size: 19px;
    font-weight: 500;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `

const Divider = styled.div`
    margin-top: ${props => props.mt};
  `

const Icon = styled.img`
    display: inline-block;
    margin: auto 12px auto 0;
  `

const Span = styled.span`
  display: inline-block;
  color: #06c953;
  cursor: pointer;
`

const CloseIcon = styled.span`
  display: inline-block;
  white-space: nowrap;
  font-size: 50px;
  color: black;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 15px;
  &:hover {
      color: #696969
  }
`


const SocialSignupModal = props => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.onRequestClose}
    styleOverlay={styles.overlay}
    styleContent={styles.content}
  >
    <CloseIcon onClick={props.onRequestClose}>&times;</CloseIcon>
    <ModalHeader>Sign up</ModalHeader>
    <Divider mt="25px" />
    <Button
      bg="#3b5998"
      block
      lg
      style={{ height: '60px' }}
    >
      <ButtonText><Icon src={FacebookIcon} alt="facebook-icon" />Continue with Facebook</ButtonText>
    </Button>
    <Paragraph>or</Paragraph>
    <Button
      bg="#07730d"
      block
      lg
      style={{ height: '60px' }}
    >
      <ButtonText><Icon src={MailIcon} alt="mail-icon" />Sign up with email</ButtonText>
    </Button>
    <Divider mt="22px" />
    <SecondaryHeader>Already have a Booking Genius account? <Span>Log In</Span></SecondaryHeader>
  </Modal>
)


SocialSignupModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
}

SocialSignupModal.defaultProps = {
  isOpen: false,
  onRequestClose: () => false,
}

export default SocialSignupModal
