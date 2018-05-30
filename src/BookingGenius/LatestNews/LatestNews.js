import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import moment from 'moment'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 371px;
  background-color: #ffffff;
  padding: 25px 16px 22px 28px;
  box-sizing: border-box;
`

const Header = styled.h2`
  font-size: 22px;
  font-family: Raleway;
  font-weight: bold;
  color: #2f3033;
  text-align: left;
  padding: 0;
  margin: 0;
  margin-bottom: 22px;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 5px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 22px;
  }
`

const Name = styled.h3`
  font-size: 16px;
  font-family: Raleway;
  font-weight: bold;
  color: #2f3033;
  padding: 0;
  margin: 0;
  margin-right: 5px;
`
const Username = styled.span`
  font-size: 15px;
  font-family: Raleway;
  color: #999999;
  margin-right: 5px;
  display: inline-block;
`

const Date = Username

const News = styled.p`
  font-family: Raleway;
  font-size: 16px;
  color: #2f3033;
  padding: 0;
  margin: 0;
  margin-bottom: 3px;
`

const GreenLink = styled.p`
  font-family: Raleway;
  font-size: 16px;
  cursor: pointer;
  color: #06c953;
  padding: 0;
  margin: 0;
  &:hover {
    text-decoration: underline;
  }
`

const LatestNews = props => (
  <Container>
    <Header>Latest News</Header>
    {props.news.map((item, id) => (
      <Column key={id}>
        <Row>
          <Name>{item.fullName}</Name>
          <Username>{`@${item.userName}`}</Username>
          <Date>{moment(item.date).format('D MMM YYYY')}</Date>
        </Row>
        <News>{item.text} </News>
        <GreenLink>{item.url}</GreenLink>
      </Column>
    ))}
  </Container>
)

LatestNews.propTypes = {
  news: PropTypes.array.isRequired,
}

export default LatestNews
