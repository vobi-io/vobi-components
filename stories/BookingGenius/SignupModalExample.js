import React from 'react'
import { action } from '@storybook/addon-actions'


import { Button, Modal, TextField } from '../../src'
import { SignupModal } from '../../src/BookingGenius'

export default class SignupModalExample extends React.Component {
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
    action('Closed modal')
  }

  render() {
    return (
      <div>
        <div>
          <div className="ltr">
            <Button primary solid onClick={this.handleOpenModal}>Open Sign up Modal</Button>

            <SignupModal
              isOpen={this.state.showModal}
              onRequestClose={this.handleCloseModal}
            />

          </div>
        </div>
      </div>
    )
  }
}