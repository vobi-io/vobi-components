import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FieldLabel from '../FieldLabel'
import SelectField from '../SelectField'
import SelectOption from '../SelectField/SelectOption'

const range = (s, n) => {
  const days = []
  for (let i = s; i <= n; i += 1) {
    days.push(i)
  }
  return days
}
const days = range(1, 31)
const months = range(1, 12)
const year = range(1900, 2018)

const Wrapper = styled.span`
  margin-right: 5px;
`

const DateSelector = props => (
  <div>
    {props.labelText
      && <FieldLabel>{props.labelText}</FieldLabel>}
    <Wrapper>
      <SelectField value={props.day}>
        <SelectOption key="DD" value="">DD</SelectOption>
        {days.map(i => (
          <SelectOption key={i} value={i}>
            {i}
          </SelectOption>
        ))}
      </SelectField>
    </Wrapper>
    <Wrapper>
      <SelectField value={props.month}>
        <SelectOption key="MM" value="">MM</SelectOption>
        {months.map(i => (
          <SelectOption key={i} value={i}>
            {i}
          </SelectOption>
        ))}
      </SelectField>
    </Wrapper>
    <Wrapper>
      <SelectField value={props.year}>
        <SelectOption key="YYYY" value="">YYYY</SelectOption>
        {year.map(i => (
          <SelectOption key={i} value={i}>
            {i}
          </SelectOption>
        ))}
      </SelectField>
    </Wrapper>
  </div>
)

DateSelector.propTypes = {
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
  labelText: PropTypes.string,
}

DateSelector.defaultProps = {
  day: undefined,
  month: undefined,
  year: undefined,
  labelText: null,
}

export default DateSelector
