import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FieldLabel from '../FieldLabel'

const Select = styled.select`
  padding: 5px 30px 5px 10px;
  border: solid 1px #cfcfcf;
  height: 40px;
  color: #a3a3a1;
  background-color: white;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23a3a3a1'><polygon points='0,0 100,0 50,50'/></svg>")
    no-repeat;
  background-size: 12px;
  background-position: calc(100% - 8px) calc(100% - 8px);
  background-repeat: no-repeat;
  ${props =>
    props.flat &&
    `
    border-radius: 0;
  `};
  ${props => props.fullWidth && 'width: 100%'};
`

const StyledAsterisk = styled.span`
  color: red;
  margin-left: 2px;
`

const SelectField = props => (
  <span>
    {props.labelText && (
      <FieldLabel>
        {props.labelText}
        {props.required && <StyledAsterisk>*</StyledAsterisk>}
      </FieldLabel>
    )}
    <Select {...props}>{props.children}</Select>
  </span>
)

SelectField.propTypes = {
  id: PropTypes.string,
  fullWidth: PropTypes.bool,
  flat: PropTypes.bool,
  disabled: PropTypes.bool,
  labelText: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
}

SelectField.defaultProps = {
  id: null,
  fullWidth: false,
  flat: false,
  disabled: false,
  labelText: null,
  required: false,
  value: '',
  defaultValue: undefined,
  onChange: () => {},
}

export default SelectField
