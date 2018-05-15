import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { CodeBlock } from '../../utils'

import { Button, Modal } from '../../src'

const snippets = {
  import: 'import Modal from \'vobi-components/Modal\'',
}

export default class ModalExample extends React.Component {
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

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div>
        <CodeBlock source={snippets.import} type="jsx" />
        <div>
          <div className="ltr">
            <Button primary solid onClick={this.handleOpenModal}>Open Modal</Button>

            <Modal
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example"
              onRequestClose={this.handleCloseModal}
            >
              <p>Modal text!</p>
              <button onClick={this.handleCloseModal}>Close Modal</button>
            </Modal>

          </div>
        </div>
      </div>
    )
  }
}
