import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FieldLabel from '../FieldLabel'

const Container = FieldLabel.extend`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 17px;
  ${props => props.disabled && 'color: #999999;'}
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  > span:after {
    top: 5px;
    left: 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: white;
  border: 1px solid #c1c1c1;
  border-radius: 50%;
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`

const Radio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked ~ span {
    background-color: #61c368;
    border: 1px solid #61c368;
  }
  &:checked ~ span:after {
    display: block;
  }
`

const RadioField = props => (
  <Container>
    { props.labelText && props.labelText }
    <Radio type="radio" {...props} />
    <Checkmark {...props} />
  </Container>
)

RadioField.propTypes = {
  labelText: PropTypes.string,
  disabled: PropTypes.bool,
}

RadioField.defaultProps = {
  labelText: null,
  disabled: false,
}

export default RadioField
