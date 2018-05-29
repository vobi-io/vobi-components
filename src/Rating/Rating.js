import React from 'react'
import PropTypes from 'prop-types'
import ReactStars from 'react-stars'
import styled from 'styled-components'

const Container = styled.div``

const Rating = props => (
  <Container>
    <ReactStars
      count={props.count}
      value={props.value}
      size={props.size}
      half={props.half}
      edit={props.disabled}
      color1={props.color1}
      color2={props.color2}
      onChange={props.onChange}
    />
  </Container>
)

Rating.propTypes = {
  count: PropTypes.number,
  value: PropTypes.number,
  size: PropTypes.number,
  half: PropTypes.bool,
  disabled: PropTypes.bool,
  color1: PropTypes.string,
  color2: PropTypes.string,
  onChange: PropTypes.func,
}

Rating.defaultProps = {
  count: 5,
  value: 0,
  size: 19,
  half: false,
  disabled: true,
  color1: '#e9e9e9',
  color2: '#fcae28',
  onChange: () => false,
}

export default Rating
