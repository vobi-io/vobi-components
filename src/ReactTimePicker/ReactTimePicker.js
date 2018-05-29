import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker'

import Clock from '../../assets/svg/ReactTimePicker/clock.svg'


const Wrapper = styled.div`
  position: relative;

  .rc-time-picker-input {
    padding: 11px 11px 9px 36px !important;
    font-size: 19px !important;
    line-height: 24px !important;
    height: auto;
    border-radius: 0;
    width: 120px;
  }

`

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  width: 20px;
  height: auto;
  transform: translateY(-50%);
`

const ReactTimePicker = props => (
  <Wrapper>
    <TimePicker 
      showSecond={false}
      format={props.format}
      use12Hours
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
    <Icon src={Clock} />
  </Wrapper>
)

ReactTimePicker.propTypes = {
  format: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

ReactTimePicker.defaultProps = {
  format: 'h:mm a',
  placeholder: 'Time',
}

export default ReactTimePicker