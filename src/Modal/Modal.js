import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import styled from 'styled-components'

const Modal = props => (
  <ReactModal
    isOpen={props.isOpen}
    closeTimeoutMS={0}
    style={{ overlay: props.styleOverlay, content: props.styleContent }}
    contentLabel={props.contentLabel}
    ariaHideApp={false}
    shouldFocusAfterRender
    shouldCloseOnOverlayClick
    shouldCloseOnEsc
    shouldReturnFocusAfterClose
    role="dialog"
    parentSelector={() => document.body}
    aria={{
      labelledby: 'heading',
      describedby: 'full_description',
    }}
  >
    {props.children}
  </ReactModal>
)

Modal.propTypes = {
  isOpen: PropTypes.bool,
  contentLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  styleOverlay: PropTypes.object,
  styleContent: PropTypes.object,
}

Modal.defaultProps = {
  isOpen: false,
  contentLabel: '',
  styleOverlay: {},
  styleContent: {},
}

export default Modal
