import React from 'react'
import { action } from '@storybook/addon-actions'

import { Button, Modal } from '../../src'
import { VideoPreviewModal } from '../../src/BookingGenius'

const urlList = [
    'https://www.youtube.com/watch?v=y6120QOlsfU',
    'https://www.youtube.com/watch?v=COwidtYzmJo',
    'https://www.youtube.com/watch?v=zfXBNQMj2SE',
    'https://www.youtube.com/watch?v=AZ1pHmWhIuY',
    'https://www.youtube.com/watch?v=UAHaxlCe29E',
    'https://www.youtube.com/watch?v=L3wKzyIN1yk'
  ]

export default class VideoPreviewModalExample extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
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
            <Button primary solid onClick={this.handleOpenModal}>Open Video Preview Modal</Button>

            <VideoPreviewModal
              isOpen={this.state.showModal}
              onRequestClose={this.handleCloseModal}
              data={urlList}
              startAtIndex={3}
            />
          </div>
        </div>
      </div>
    )
  }
}