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
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  > span:after {
    left: 6px;
    top: 3px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
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
  ${props => !props.flat && 'border-radius: 2px;'}
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`

const Checkbox = styled.input`
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

const CheckboxField = props => (
  <Container>
    { props.labelText && props.labelText }
    <Checkbox type="checkbox" {...props} />
    <Checkmark {...props} />
  </Container>
)

CheckboxField.propTypes = {
  labelText: PropTypes.string,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
}

CheckboxField.defaultProps = {
  labelText: null,
  disabled: false,
  flat: false,
}

export default CheckboxField
