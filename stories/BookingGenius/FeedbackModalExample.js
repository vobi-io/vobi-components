import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { CodeBlock } from '../../utils'

import { Button, Modal } from '../../src'
import { FeedbackModal } from '../../src/BookingGenius'

export default class FeedbackModalExample extends React.Component {
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
            <Button primary solid onClick={this.handleOpenModal}>Open Feedback Modal</Button>

            <FeedbackModal
              isOpen={this.state.showModal}
              onRequestClose={this.handleCloseModal}
            />

          </div>
        </div>
      </div>
    )
  }
}
