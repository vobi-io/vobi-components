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
  `;

  const SecondaryHeader = styled.h3`
    font-size: 18px;
    margin-top: 15px;
    color: black;
    text-align: center;
    margin: 0;
    padding: 0;
    font-weight: 500;
  `;

  const Divider = styled.div`
    margin-top: ${props => props.mt};
  `



class LogInModal extends React.Component {
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
                <Button primary onClick={this.handleOpenModal}>Sign Up</Button>
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleCloseModal}
                    styleOverlay={styles.overlay}
                    styleContent={styles.content}
                >   
                    <ModalHeader>Sign up</ModalHeader>
                    <Divider mt={'22px'} />
                    <TextField
                        fullWidth
                        flat
                        labelText="Full Name"
                        placeholder=""
                        rows={null}
                    />
                    <Divider mt={'15px'} />
                    <TextField
                        fullWidth
                        flat
                        labelText="Email"
                        placeholder=""
                        rows={null}
                    />
                    <Divider mt={'15px'} />
                    <TextField
                        fullWidth
                        flat
                        labelText="Password"
                        type="password"
                        placeholder=""
                        rows={null}
                    />
                    <Divider mt={'15px'} />
                    <TextField
                        fullWidth
                        flat
                        labelText="Your Password"
                        type="password"
                        placeholder=""
                        rows={null}
                    />
                    <Divider mt={'15px'} />
                    <Button 
                        onClick={this.handleCloseModal}
                        bg={'#07730d'} 
                        color={'black'}
                        block 
                        lg>
                            Sign up
                    </Button>
                    <Divider mt={'28px'} />
                    <SecondaryHeader>Already have a Booking Genius account? Log In</SecondaryHeader>
                </Modal>
            </React.Fragment>
        )
    }
}

LogInModal.propTypes = {
}

LogInModal.defaultProps = {
}

export default LogInModal