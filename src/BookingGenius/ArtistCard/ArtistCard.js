import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import VerifiedIcon from '../../../assets/svg/BookingGenius/Verified.svg'
import DollarIcon from '../../../assets/svg/BookingGenius/Dollar.svg'

import { Rating } from '../..'
import Button from '../TalentPage/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 307px;
  background-color: #ffffff;
  border: solid 1px #dbdbdb;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px 26px;
  padding-bottom: 26px;
`

const Avatar = styled.div`
  width: 307px;
  height: 204px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`
const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Name = styled.span`
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: #303030;
`

const Verified = styled.img``

const Address = styled.span`
  margin-top: 5px;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: left;
  color: #9396a0;
`

const Tags = styled.span`
  margin-top: 13px;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: left;
  color: #2f3033;
`

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

const Reviews = styled.span`
  font-size: 13px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #bec0c6;
  margin-left: 5px;
`

const Dollar = styled.img`
  margin-right: 5px;
`

const PriceRange = styled.span`
  margin-top: 15px;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #2f3033;
  display: flex;
  align-items: center;
`
const ButtonContainer = styled.div`
  padding-bottom: 23px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const ArtistCard = props => {
  if (props.view) {
    return (
      <Container>
        <Avatar src={props.artist.avatar} />
        <Info>
          <NameContainer>
            <Name>
              {props.artist.fullName}
            </Name>
            {props.artist.verified && <Verified src={VerifiedIcon} />}
          </NameContainer>
          <Address>
            {props.artist.address}
          </Address>
          <Tags>
            {props.artist.tags.join(', ')}
          </Tags>
          <RatingContainer>
            <Rating
              value={props.artist.rating}
              disabled
            />
            <Reviews>({props.artist.reviews.length})</Reviews>
          </RatingContainer>
          <PriceRange>
            <Dollar src={DollarIcon} alt="" />
            {props.artist.price.min} - {props.artist.price.max} for event
          </PriceRange>
        </Info>
        <ButtonContainer>
          <Button display={"View Profile"} />
        </ButtonContainer>
      </Container>
    )
  } else {
    return (
      <Container>
        <Avatar src={props.artist.avatar} />
        <Info>
          <NameContainer>
            <Name>
              {props.artist.fullName}
            </Name>
            {props.artist.verified && <Verified src={VerifiedIcon} />}
          </NameContainer>
          <Address>
            {props.artist.address}
          </Address>
          <Tags>
            {props.artist.tags.join(', ')}
          </Tags>
          <RatingContainer>
            <Rating
              value={props.artist.rating}
              disabled
            />
            <Reviews>({props.artist.reviews.length})</Reviews>
          </RatingContainer>
          <PriceRange>
            <Dollar src={DollarIcon} alt="" />
            {props.artist.price.min} - {props.artist.price.max} for event
          </PriceRange>
        </Info>
      </Container>
    )
  }
}

ArtistCard.propTypes = {
  artist: PropTypes.object.isRequired,
  view: PropTypes.bool.isRequired,
}

ArtistCard.defaultProps = {}

export default ArtistCard
