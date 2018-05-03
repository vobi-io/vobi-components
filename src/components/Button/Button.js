import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  min-width: 136px;
  ${props => props.block && 'width: 100%; display: block'};
  padding: 14px 20px;
  background: ${props => (
    (props.solid && props.primary && '#06c953') ||
    (props.solid && '#b7b7b7') || 'white')};
  font-family: Montserrat;
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${props => (props.primary ? '#06c953' : '#b7b7b7')};
  ${props => !props.flat && 'border-radius: 6px;'}
`

const Button = props => (
  <StyledButton {...props}>
    {props.children}
  </StyledButton>
)

Button.propTypes = {
  flat: PropTypes.bool,
  primary: PropTypes.bool,
  solid: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  flat: false,
  primary: false,
  solid: false,
  block: false,
}

export default Button
