import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Card = styled.div`
  width: 254px;
  height: 90px;
  padding-top: 23px;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.17);
`

const CardText = styled.div`
  height: 20px;
  font-family: ProximaNova;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: normal;
  text-align: center;
  margin-bottom: 11px;
  color: #A6A7B1;
`

const CardNumber = styled.div`
  width: 80px;
  height: 34px;
  font-family: ProximaNova;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin: 0 auto;
  color: #303030;
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`
const Img = styled.img`
  height: ${props => props.src ? '16px' : '0px'}
  width: ${props => props.src ? '16px' : '0px'}
`


const NumberedCard = props => (
  <Card {...props}>
    <FlexDiv>
      <CardText>{props.text}</CardText>
      <Img src={props.img} />
    </FlexDiv>
    <CardNumber>{props.amount}</CardNumber>
  </Card>
)

NumberedCard.propTypes = {
  text: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  img: PropTypes.string
}

export default NumberedCard
