import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  ${props => props.block && 'width: 100%'};
  font-family: inherit;
  font-size: ${(props) => {
    if (props.sm) return '13px'
    else if (props.lg) return '19px'
    return '16px'
  }}
  font-weight: ${props => (props.bold ? 'bold' : '400')};
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  text-decoration: none;
  outline: 0;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  
  padding: ${(props) => {
    if (props.sm) return '7px 15px'
    else if (props.lg) return '9px 20px'
    return '8px 18px'
  }};

  background-color: ${(props) => {
    if (props.outline) return 'transparent'
    else if (props.primary) return '#007bff'
    else if (props.secondary) return '#6c757d'
    else if (props.green) return '#28a745'
    else if (props.red) return '#dc3545'
    else if (props.yellow) return '#ffc107'
    else if (props.dark) return '#343a40'
    else if (props.bg) return props.bg
    return '#fff'
  }};

  color: ${(props) => {
    if (props.outline) {
      if (props.primary) return '#007bff'
      else if (props.secondary) return '#6c757d'
      else if (props.green) return '#28a745'
      else if (props.red) return '#dc3545'
      else if (props.yellow) return '#ffc107'
      else if (props.dark) return '#343a40'
      else if (props.bg) return props.bg
      return '#212529'
    } else if (props.primary || props.secondary || props.green || props.red || props.dark) return '#fff'
    else if (props.color) return props.color
    return '#212529'
  }};
  

  border: 2px solid transparent;

  border-radius: ${(props) => {
    if (props.solid) return '5px'
    if (props.rounded) return '999px'
    return 0
  }}

  border-color: ${(props) => {
    if (props.primary) return '#007bff'
    else if (props.secondary) return '#6c757d'
    else if (props.green) return '#28a745'
    else if (props.red) return '#dc3545'
    else if (props.yellow) return '#ffc107'
    else if (props.dark) return '#343a40'
    else if (props.bg) return props.bg
    return '#212529'
  }};

  transition: all .2s ease-in-out;

  &:disabled {
    opacity: .65;
  }

  &:hover {
    color: ${(props) => {
    if (props.outline) {
      return props.yellow ? '#212529' : '#fff'
    }
    return null
  }}
    background-color: ${(props) => {
    if (props.outline) {
      if (props.primary) return '#007bff'
      else if (props.secondary) return '#6c757d'
      else if (props.green) return '#28a745'
      else if (props.red) return '#dc3545'
      else if (props.yellow) return '#ffc107'
      else if (props.dark) return '#343a40'
      else if (props.color) return props.bg
      return '#212529'
    }
    return null
  }}
`

const Button = props => <StyledButton {...props}>{props.children}</StyledButton>

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  green: PropTypes.bool,
  red: PropTypes.bool,
  yellow: PropTypes.bool,
  dark: PropTypes.bool,
  bg: PropTypes.string,
  color: PropTypes.string,
  solid: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  bold: PropTypes.bool,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  primary: false,
  secondary: false,
  green: false,
  red: false,
  yellow: false,
  dark: false,
  solid: false,
  block: false,
  disabled: false,
  bold: false,
  sm: false,
  lg: false,
  rounded: false,
  outline: false,
  bg: '',
  color: '',
}

export default Button
