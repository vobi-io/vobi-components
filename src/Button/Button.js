import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  min-width: 136px;
  ${props => props.block && 'width: 100%; display: block'};
  padding: 14px 20px;
  background: ${props => (
    (props.solid && props.primary && props.theme.button.primary.borderColor) ||
    (props.solid && props.theme.button.default.borderColor)
  )};
  font-family: Montserrat;
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
  border: ${props => props.theme.button.borderWidth} solid ${(props) => {
  if (props.primary) return props.theme.button.primary.borderColor
  return props.theme.button.default.borderColor
}};
  color: ${(props) => {
    if (props.primary && !props.solid) return props.theme.button.primary.color
    if (props.primary && props.solid) return props.theme.button.solid.color
    return props.theme.button.color
  }};
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
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  flat: false,
  primary: false,
  solid: false,
  block: false,
  disabled: false,
}

export default Button
