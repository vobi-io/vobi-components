import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Modal, Button, TextField } from '../..'

import FacebookIcon from '../../../assets/svg/BookingGenius/Facebook.svg';
import MailIcon from '../../../assets/svg/BookingGenius/Mail.svg';

const styles = {
    overlay: {
      backgroundColor: 'rgb(216, 216, 216, 0.48)',
      border: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },  
    content : {
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
    }
  }


  const ModalHeader = styled.h1`
    text-align: center;
    font-size: 36px;
    margin: 0;
    padding: 0;
    margin-top: 10px;
  `;

  const Paragraph = styled.p`
    font-size: 24px;
    font-weight: 500;
    color: black;
    text-align: center;
    margin: 12px 0;
    padding: 0;
  `;

  const SecondaryHeader = styled.h3`
  font-size: 18px;
  margin-top: 15px;
  color: black;
  text-align: center;
  margin: 0;
  padding: 0;
  font-weight: 500;
  margin-bottom: 10px;
`;

  const ButtonText = styled.span`
    font-size: 19px;
    font-weight: 500;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Divider = styled.div`
    margin-top: ${props => props.mt};
  `

  const Icon = styled.img`
    display: inline-block;
    margin: auto 12px auto 0;
  `



class SocialLogInModal extends React.Component {
    constructor() {
      super()
      this.state = {
        showModal: true,
      }
  
      this.handleOpenModal = this.handleOpenModal.bind(this)
      this.handleCloseModal = this.handleCloseModal.bind(this)
    }
  
    handleOpenModal = () => {
      this.setState({ showModal: true })
    }
  
    handleCloseModal(e) {
      this.setState({ showModal: false })
    }

    render() {
        return (
            <React.Fragment>
                <Button green onClick={this.handleOpenModal}>Sign Up</Button>
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleCloseModal}
                    styleOverlay={styles.overlay}
                    styleContent={styles.content}
                >   
                    <ModalHeader>Sign up</ModalHeader>
                    <Divider mt={'25px'} />
                    <Button
                      onClick={this.handleCloseModal}
                      bg={'#3b5998'}
                      color={'black'}
                      block
                      lg
                      style={{height: '60px'}}
                    >
                      <ButtonText><Icon src={FacebookIcon} alt="facebook-icon" />Continue with Facebook</ButtonText>
                    </Button>
                    <Paragraph>or</Paragraph>
                    <Button
                      onClick={this.handleCloseModal}
                      bg={'#07730d'}
                      color={'black'}
                      block
                      lg
                      style={{height: '60px'}}
                    >
                      <ButtonText><Icon src={MailIcon} alt="mail-icon"/>Sign up with email</ButtonText>
                    </Button>
                    <Divider mt={'22px'} />
                    <SecondaryHeader>Already have a Booking Genius account? Log In</SecondaryHeader>
                </Modal>
            </React.Fragment>
        )
    }
}

SocialLogInModal.propTypes = {
}

SocialLogInModal.defaultProps = {
}

export default SocialLogInModal