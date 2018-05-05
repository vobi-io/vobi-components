import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FieldLabel from '../FieldLabel'

const commonStyles = props => (`
  min-height: 28px;
  padding: 5px 10px;
  border: solid 1px #cfcfcf;
  ${!props.flat && 'border-radius: 6px;'};
  ${props.fullWidth && 'width: 100%'};
`)

const Textarea = styled.textarea`
  ${props => commonStyles(props)}
  ${props => props.disableResize && 'resize: none'};
`
const Input = styled.input`
  ${props => commonStyles(props)}
`

const StyledAsterisk = styled.span`
  color: red;
  margin-left: 2px;
`

const TextField = props => (
  <div>
    {props.labelText
      && <FieldLabel>{props.labelText}{props.required && <StyledAsterisk>*</StyledAsterisk>}</FieldLabel>}
    {props.multiLine ? <Textarea {...props} /> : <Input {...props} />}
  </div>
)

TextField.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  multiLine: PropTypes.bool,
  rows: PropTypes.number,
  maxRows: PropTypes.number,
  disableResize: PropTypes.bool,
  fullWidth: PropTypes.bool,
  flat: PropTypes.bool,
  disabled: PropTypes.bool,
  labelText: PropTypes.string,
  placeholder: PropTypes.node,
  required: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
}

TextField.defaultProps = {
  id: null,
  type: 'text',
  multiLine: false,
  disableResize: false,
  rows: 2,
  maxRows: null,
  fullWidth: false,
  flat: false,
  disabled: false,
  labelText: null,
  placeholder: null,
  required: false,
  value: '',
  defaultValue: undefined,
  onChange: () => {},
}

export default TextField
