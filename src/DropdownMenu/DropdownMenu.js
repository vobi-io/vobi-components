import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Slot from './Slot'

const Container = styled.div`
`
const Trigger = styled.div`
  position: relative;
  ${({ active }) => active && `
    :before {
      content:" ";
      position: absolute;
      left: 30px;
      bottom: -1px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 13px 13px 13px;
      border-color: transparent transparent #ffffff transparent;
    }
  `}
`
const Menu = styled.div`
  width: 339px;
  height: 265px;
  background-color: #ffffff;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.13);
`

class DropdownMenu extends React.Component {
  constructor() {
    super()

    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  showMenu(event) {
    event.preventDefault()

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu)
    })

    this.props.onToggle(true)
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu)
      })
    }
    this.props.onToggle(false)
  }

  render() {
    const { children } = this.props
    const { showMenu } = this.state
    return (
      <Container>
        <Trigger active={showMenu} onClick={this.showMenu}>
          <Slot slot="trigger">{children}</Slot>
        </Trigger>

        {
          showMenu
            ? (
              <Menu innerRef={(e) => { this.dropdownMenu = e }}>
                <Slot slot="content">{children}</Slot>
              </Menu>
            )
            : (
              null
            )
        }
      </Container>
    )
  }
}

DropdownMenu.propTypes = {
  onToggle: PropTypes.func,
}

DropdownMenu.defaultProps = {
  onToggle: () => false,
}

export default DropdownMenu
