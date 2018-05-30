import React from 'react'
import { action } from '@storybook/addon-actions'


import { Button, Modal, TextField } from '../../src'
import { SocialSignupModal } from '../../src/BookingGenius'

export default class SocialSignupModalExample extends React.Component {
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
            <Button primary solid onClick={this.handleOpenModal}>Open Social Sign Up Modal</Button>

            <SocialSignupModal
              isOpen={this.state.showModal}
              onRequestClose={this.handleCloseModal}
            />

          </div>
        </div>
      </div>
    )
  }
}