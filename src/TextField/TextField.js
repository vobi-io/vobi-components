import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FieldLabel from '../FieldLabel'

const Input = styled.input`
  min-height: 28px;
  padding: 10px 20px;
  border: solid 1px #cfcfcf;
  box-sizing: border-box;
  ${props => !props.flat && 'border-radius: 6px;'};
  ${props => props.fullWidth && 'width: 100%'};
`

const Textarea = Input.withComponent('textarea').extend`
  ${props => props.disableResize && 'resize: none'};
`

const StyledAsterisk = styled.span`
  color: red;
  margin-left: 2px;
`

const TextField = (props) => {
  let childComponent

  if (props.multiLine) {
    childComponent = <Textarea {...props} />
  } else {
    childComponent = <Input {...props} />
  }

  return (
    <div>
      {props.labelText && (
        <FieldLabel>
          {props.labelText}
          {props.required && <StyledAsterisk>*</StyledAsterisk>}
        </FieldLabel>
      )}
      {childComponent}
    </div>
  )
}

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
  placeholder: undefined,
  required: false,
  value: undefined,
  defaultValue: undefined,
  onChange: undefined,
}

export default TextField
