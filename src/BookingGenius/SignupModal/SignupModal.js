import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Modal, Button, TextField } from '../..'

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
    padding: '35px 40px 30px',
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
`

const SecondaryHeader = styled.h3`
  font-size: 15px;
  margin-top: 15px;
  color: black;
  text-align: center;
  margin: 0;
  padding: 0;
  font-weight: 600;
`

const Divider = styled.div`
  margin-top: ${props => props.mt};
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
    color: #696969;
  }
`

const SignupModal = props => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.onRequestClose}
    styleOverlay={styles.overlay}
    styleContent={styles.content}
  >
    <CloseIcon onClick={props.onRequestClose}>&times;</CloseIcon>
    <ModalHeader>Sign up</ModalHeader>
    <Divider mt="22px" />
    <TextField fullWidth flat labelText="Full Name" placeholder="" rows={null} />
    <Divider mt="15px" />
    <TextField fullWidth flat labelText="Email" placeholder="" rows={null} />
    <Divider mt="15px" />
    <TextField fullWidth flat labelText="Password" type="password" placeholder="" rows={null} />
    <Divider mt="15px" />
    <TextField fullWidth flat labelText="Your Password" type="password" placeholder="" rows={null} />
    <Divider mt="15px" />
    <Button bg="#07730d" color="#fff" block lg>
      Sign up
    </Button>
    <Divider mt="28px" />
    <SecondaryHeader>
      Already have a Booking Genius account? <Span>Log In</Span>
    </SecondaryHeader>
  </Modal>
)

SignupModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
}

SignupModal.defaultProps = {
  isOpen: false,
  onRequestClose: () => false,
}

export default SignupModal
