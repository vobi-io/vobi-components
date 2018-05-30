import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Modal } from '../..'

function youtube_parser(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
  const match = url.match(regExp)
  return match && match[7].length == 11 ? match[7] : false
}

const styles = {
  overlay: {
    backgroundColor: 'transparent',
    border: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgb(0, 0, 0, 0.85)',
    boxShadow: '0 1px 12px 0 rgba(0, 0, 0, 0.21)',
    border: 0,
    borderRadius: 0,
    padding: '10px',
    width: '100%',
    height: '100%',
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: transparent;
  font-size: 60px;
  color: #939393;
  border: 0;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #bdbdbd;
  }
`

const Player = styled.div`
  position: relative;
`

const SliderIcon = styled.div`
  position: absolute;
  top: 50%;
  ${props => props.left && 'left: -50px'};
  ${props => props.right && 'right: -50px'};
  transform: translateY(-50%);
  svg {
    cursor: pointer;
    fill: #fff;
  }
  svg:hover {
    fill: #bdbdbd;
  }
`

const Icon = props => (
  <SliderIcon {...props}>
    {props.left && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 129 129"
        enableBackground="new 0 0 129 129"
        width="50px"
        height="50px"
      >
        <g>
          <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
        </g>
      </svg>
    )}
    {props.right && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 129 129"
        enableBackground="new 0 0 129 129"
        width="50px"
        height="50px"
      >
        <g>
          <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
        </g>
      </svg>
    )}
  </SliderIcon>
)

class VideoPreviewModal extends React.Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0,
    }

    this.slideRight = this.slideRight.bind(this)
    this.slideLeft = this.slideLeft.bind(this)
  }

  componentDidMount() {
    this.setState({ currentIndex: this.props.startAtIndex })
  }

  slideRight() {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }))
  }

  slideLeft() {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    }))
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        styleOverlay={styles.overlay}
        styleContent={styles.content}
      >
        <CloseButton onClick={this.props.onRequestClose}>&times;</CloseButton>
        <Player>
          {this.props.data.map((url, index) =>
            index === this.state.currentIndex && (
              <iframe
                key={index}
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${youtube_parser(url)}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`}
                frameBorder="0"
              />
            ))}
          {this.state.currentIndex > 0 && <Icon left onClick={this.slideLeft} />}
          {this.state.currentIndex < this.props.data.length - 1 && <Icon right onClick={this.slideRight} />}
        </Player>
      </Modal>
    )
  }
}

VideoPreviewModal.propTypes = {
  data: PropTypes.array.isRequired,
  startAtIndex: PropTypes.number,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
}

VideoPreviewModal.defaultProps = {
  isOpen: false,
  onRequestClose: () => false,
  startAtIndex: 0,
}

export default VideoPreviewModal
