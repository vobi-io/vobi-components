import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FieldLabel = styled.label`
  color: #333333;
  font-size: 16px;
  font-weight: normal;
  font-family: ProximaNova;
  display: block;
  margin-bottom: 5px;
  margin-left: 2px;
`

FieldLabel.propTypes = {
  children: PropTypes.node.isRequired,
}

FieldLabel.defaultProps = {
}

export default FieldLabel
