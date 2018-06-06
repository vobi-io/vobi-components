import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import 'react-dates/initialize'
import { DateRangePicker, isInclusivelyBeforeDay } from 'react-dates'
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css'

const Wrapper = styled.div`
    .CalendarDay__default {
        border: 0;
        border-radius: 50%;
    }
    .CalendarDay__default:hover {
        border: 0;
    }
    .CalendarDay__hovered_offset {
        border: 0;
    }
    .CalendarDay__blocked_minimum_nights {
        border: 0;
    }
    .CalendarDay__selected_span {
        border: 0;
    }
    .CalendarDay__selected_span:active,
    .CalendarDay__selected_span:hover {
        border: 0;
    }

    .CalendarDay__selected,
    .CalendarDay__selected:active,
    .CalendarDay__selected:hover {
        border: 0;
    }

    .CalendarDay__hovered_span,
    .CalendarDay__hovered_span:hover {
        border: 0;
    }

    .CalendarDay__hovered_span:active {
        border: 0;
    }

    .CalendarDay__blocked_calendar,
    .CalendarDay__blocked_calendar:active,
    .CalendarDay__blocked_calendar:hover {
        border: 0;
    }

    .CalendarDay__blocked_out_of_range,
    .CalendarDay__blocked_out_of_range:active,
    .CalendarDay__blocked_out_of_range:hover {
        border: 0;
    }



    .DayPickerNavigation_button__horizontal {
        border-radius: 50%;
        padding: 6px 8px;
    }

    .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover {
        background: #06c953;
    }

    .DateInput_input__focused {
        box-sizing: border-box;
    }

    .DateInput {
        width: 106px;
    }

    .DateInput_input {
        box-sizing: border-box;
        padding: 6.5px 7px 5.5px;
        opacity: 0.6;	
        color: #1F1E1E;	
        font-family: "Proxima Nova";	
        font-size: 16px;
        text-align: center;
    }

    .DateInput_input::placeholder {
        text-align: center;
    }

    .CalendarDay {
        font-weight: 600;
    }

    .DateRangePickerInput_calendarIcon {
        padding: 0;
        margin: 0 5px 0 10px;
    }

    .CalendarDay__selected_span,
    .CalendarDay__selected_span:active, 
    .CalendarDay__selected_span:hover {
        background: #06c953;
    }

    .CalendarDay__hovered_span,
    .CalendarDay__hovered_span:hover {
        background: #acf7c9;
        color: black;
    }

    .DateRangePickerInput__withBorder {
        border: 1px solid #C1C1C1;	
        border-radius: 4px;	
        background-color: #FFFFFF;
        overflow: hidden;
    }
`

class RangePicker extends React.Component {
    constructor() {
      super()
      this.state = {
        focusedInput: null,
        startDate: null,
        endDate: null
      }
  
    }
    render() {
      return (
        <Wrapper>
            <DateRangePicker
                isOutsideRange={() => false}
                hideKeyboardShortcutsPanel={true}
                customArrowIcon={'-'}
                displayFormat={'MMM D, YYYY'}
                showDefaultInputIcon={true}
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
        </Wrapper>
      )
    }
  }

RangePicker.propTypes = {
}

RangePicker.defaultProps = {
}

export default RangePicker