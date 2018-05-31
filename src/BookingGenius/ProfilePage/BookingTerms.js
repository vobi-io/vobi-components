import React, { Component } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 838px;
    height: 209px;
    box-sizing:border-box;
    padding: 5px 25px;
    background-color: #ffffff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
`
const MainTitle = styled.div`
    width: 227px;
    height: 66px;
    font-family: Raleway;
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 3;
    letter-spacing: normal;
    text-align: left;
    color: #2f3033;
`
const Title = styled.div`
    width: 575px;
    height: 24px;
    font-family: Raleway;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #332f2f;
    margin-top:5px;
`
const Description = styled.div`
    width: 693px;
    height: 83px;
    font-family: Raleway;
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: left;
    color: #332f2f; 
    margin-top:8px;  
`

const BookingTerms = props => (
  <Container>
    <MainTitle>
      {props.mainTitle}
    </MainTitle>
    <Title>
      {props.title}
    </Title>
    <Description>
      {props.description}
    </Description>
  </Container>
)


export default BookingTerms
