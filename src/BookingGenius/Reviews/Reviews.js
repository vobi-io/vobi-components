import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'

import { Rating } from '../../'

const Container = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.11);
  padding: 0 24px;
`
const Header = styled.div`
  display: flex;
  align-items: center;
`
const Title = styled.span`
  font-family: Raleway;
  font-size: 22px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 3;
  letter-spacing: normal;
  text-align: left;
  color: #2f3033;
  margin-right: 10px;
`

const List = styled.div`
`
const ListItem = styled.div`
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid #e6e6e6;
  &:last-child {
    padding-bottom: 20px;
    margin-bottom: 0
    border-bottom: 0;
  }  
`
const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const ListTitle = styled.span`
  font-family: Raleway;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #332f2f;
`
const ListDate = styled.span`
  opacity: 0.6;
  font-family: Raleway;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #1f1e1e;
`
const ListContent = styled.span`
  font-family: Raleway;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #332f2f;
`

const Reviews = props => (
  <Container>
    <Header>
      <Title>Reviews ({props.reviews.length}):</Title>
      <Rating value={props.rating} size={19} />
    </Header>
    <List>
      {props.reviews.map(item => (
        <ListItem key={item.title}>
          <ListHeader>
            <ListTitle>
              {item.title}
            </ListTitle>
            <ListDate>{moment(item.createdAt).format('DD.MM.YYYY')}</ListDate>
          </ListHeader>
          <ListContent>
            {item.description}
          </ListContent>
        </ListItem>
      ))}
    </List>
  </Container>
)

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  rating: PropTypes.number,
}

Reviews.defaultProps = {
  rating: 0,
}

export default Reviews
