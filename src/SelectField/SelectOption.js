import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Option = styled.option`
`

const SelectOption = ({ disabled, value, children }) => (
  <Option disabled={disabled} value={value}>
    {children}
  </Option>
)

SelectOption.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  children: PropTypes.node.isRequired,
}

SelectOption.defaultProps = {
  disabled: false,
}

export default SelectOption
