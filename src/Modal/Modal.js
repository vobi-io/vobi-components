import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import styled from 'styled-components'

const styles = {
  overlay: {
    backgroundColor: 'rgba(216, 216, 216, 0.7)',
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
    width: 'max-content',
    position: 'relative',
    maxHeight: '80vh',
    overflowY: 'auto',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}

const Modal = props => (
  <ReactModal
    isOpen={props.isOpen}
    closeTimeoutMS={0}
    style={{ overlay: styles.overlay, content: styles.content }}
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
}

Modal.defaultProps = {
  isOpen: false,
  contentLabel: '',
}

export default Modal
