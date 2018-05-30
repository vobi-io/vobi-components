import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import RightArrow from '../../../assets/svg/BookingGenius/RightArrow.svg'
import LeftArrow from '../../../assets/svg/BookingGenius/LeftArrow.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Frame = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 38px;
  height: 38px;
  border: solid 1px #bec0c6;
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
  font-size: 18px;
  letter-spacing: 0.1px;
  font-family: Raleway;
  color: #2f3033;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.activePage {
    color: white;
    background: #0d80ff;
  }
`

const Icon = styled.img`
  display: block;
  height: 18px;
  width: auto;
`

const Pagination = props => (
  <Wrapper>
    <Frame>
      <Icon src={LeftArrow} />
    </Frame>
    {Array(props.pageCount)
      .fill(1)
      .map((x, y) => x + y)
      .map((page, index) => <Frame key={index}>{page}</Frame>)}
    <Frame>
      <Icon src={RightArrow} />
    </Frame>
  </Wrapper>
)

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
}

export default Pagination
