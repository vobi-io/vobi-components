import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DollarIcon from '../../../assets/svg/BookingGenius/Dollar.svg'

import { Rating, Button } from '../..'
import { Favorite } from '..'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 267px;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
  position: relative;
`

const FavoriteContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 13px 18px;
`

const Avatar = styled.img`
  display: block;
  width: 267;
  height: 200px;
  object-fit: cover;
`

const Name = styled.span`
  display: inline-block;
  font-size: 20px;
  font-family: Raleway;
  font-weight: bold;
  text-align: center;
  color: #303030;
`

const Address = styled.span`
  display: inline-block;
  font-family: Raleway;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #9396a0;
  margin-top: 5px;
`

const Genre = styled.span`
  display: inline-block;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: black;
  margin-top: 7px;
`

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Price = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  font-size: 21px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin: 6px 0 10px;
`

const ButtonText = styled.span`
  display: inline-block;
  font-size: 17px;
  font-family: Raleway;
`

const TalentCard = props => (
  <Container>
    <FavoriteContainer>
      <Favorite favorited={props.artist.favorited} />
    </FavoriteContainer>
    <Avatar src={props.artist.avatar} />
    <Info>
      <Name>{props.artist.fullName}</Name>
      <RatingContainer>
        <Rating value={props.artist.rating} disabled={false} size={30} />
      </RatingContainer>
      <Address>{props.artist.address}</Address>
      <Genre>{props.artist.genre}</Genre>
      <Price>
        <img src={DollarIcon} />
        {props.artist.price}
      </Price>
      <Button bg="#06c953" color="#fff" solid block bold sm>
        <ButtonText>Book</ButtonText>
      </Button>
    </Info>
  </Container>
)

TalentCard.propTypes = {
  artist: PropTypes.object.isRequired,
}

export default TalentCard
