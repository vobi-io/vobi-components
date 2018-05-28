import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FieldLabel from '../FieldLabel'
import SelectField from '../SelectField'
import SelectOption from '../SelectField/SelectOption'

const currentYear = new Date().getFullYear()

const range = (s, n) => {
  const days = []
  for (let i = s; i <= n; i += 1) {
    days.push(i)
  }
  return days
}
const days = range(1, 31);
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const year = range(1900, currentYear).reverse();

const Wrapper = styled.span`
  margin-right: 5px;
`

class DateSelector extends React.Component {
  constructor() {
    super()
    this.state = {
      day: '',
      month: '',
      year: ''
    }

    this.handleDayChange = this.handleDayChange.bind(this)
    this.handleMonthChange = this.handleMonthChange.bind(this)
    this.handleYearChange = this.handleYearChange.bind(this)
  }

  handleDayChange(e) {
    this.setState({ day: e.target.value })
  }

  handleMonthChange(e) {
    this.setState({ month: e.target.value })
  }

  handleYearChange(e) {
    this.setState({ year: e.target.value })
  }

  render() {
    return (
        <div>
          {this.props.labelText
            && <FieldLabel>{this.props.labelText}</FieldLabel>}
          <Wrapper>
            <SelectField value={this.state.day} onChange={this.handleDayChange} >
              <SelectOption key="DD" value="">DD</SelectOption>
              {days.map(i => (
                <SelectOption key={i} value={i}>
                  {i}
                </SelectOption>
              ))}
            </SelectField>
          </Wrapper>
          <Wrapper>
            <SelectField value={this.state.month} onChange={this.handleMonthChange} >
              <SelectOption key="MM" value="">MM</SelectOption>
              {months.map(i => (
                <SelectOption key={i} value={i}>
                  {i}
                </SelectOption>
              ))}
            </SelectField>
          </Wrapper>
          <Wrapper>
            <SelectField value={this.state.year} onChange={this.handleYearChange} >
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
  }
}

DateSelector.propTypes = {
  labelText: PropTypes.string,
}

DateSelector.defaultProps = {
  labelText: null,
}

export default DateSelector
