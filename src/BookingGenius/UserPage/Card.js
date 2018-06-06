import React from 'react'
import styled from 'styled-components'

import { Rating, } from '../..'
import { Favorite } from '../'
import VerifiedIcon from '../../../assets/svg/BookingGenius/Verified.svg'
import FlightIcon from '../../../assets/svg/BookingGenius/Flight.svg'
import LocationIcon from '../../../assets/svg/BookingGenius/Location.svg'
import DollarIcon from '../../../assets/svg/BookingGenius/Dollar.svg'
import HeartIcon from '../../../assets/svg/BookingGenius/Heart.svg'

const Container = styled.div`
    width: 371px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.11);
`
const Wrapper = styled.div`
    padding: 27px 32px 20px 32px;
    .location{
        margin-top: 10px;
        align-items: center;
    }
    .travel{
        align-items: center;
        margin-top: 6px;
    }
    .price{
        margin-top: 11px;
    }
`
const RatingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    .centered{
        align-items: center;
    }
`
const FlexDiv = styled.div`
    display: flex;
    .value{
        margin-left: 2px;
        color: #bec0c6;
        font-size: 13px;
        font-weight: 600;
    }
    .verified{
        color: #bec0c6;
        font-size: 16px;
        font-weight: 500;
        margin-right: 6px;
    }
    .priceSpan{
        font-size: 18px;
        font-weight: 600;
        color: #2f3033;
        line-height: 1.17;
        margin-left: 9px;
    }
`

const TalentName = styled.span`
    color: #2f3033;
    font-size: 30px;
    font-weight: bold;
`
const LocIcon = styled.img`
    width: 13.5px;
    height: 13.5px;
`
const Airplane = styled.img`
    width: 13px;
    height: 12.4px;
`
const Span = styled.span`
    font-size: 16px;
    font-weight: 500;
    opacity: 0.6;
    line-height: 1.25;
    color: #9396a0;
    margin-left: 5px;
`

const ButtonsContainer = styled.div`
    margin-top: 24px;
    .favouriteContainer{
        margin-top: 10px;
    }
`
const BookButton = styled.button`
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: #06c953;
    color: #ffffff;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 104px 8px 105px;
`

const FavouriteButton = styled.button`
    cursor: pointer;
    background: none;
    outline: none;
    border-radius: 4px;
    border: solid 1px #bec0c6;
    font-size: 20px;
    font-weight: bold;
    color: #bec0c6;
    width: 307px;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 8px;
    .favBtn{
        margin-left: 5px;
    }
`
const Heart = styled.img`
    width: 15px;
    height: 15px;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 306px;
    height: 158px;
    margin-left: 33px;
    margin-top: -97px;
    background: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 8px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.11);
`
const FavIconHolder = styled.div`
    padding: 6px 6px 0px 0px;
`
const Card = props => (
    <Container>
        <ImageContainer src = {props.talent.avatar}>
            <FavIconHolder>
                <Favorite favorited = {false}/>
            </FavIconHolder>
        </ImageContainer>
        <Wrapper>
            <RatingContainer>
                <FlexDiv>
                    <Rating value={props.talent.rating}/>
                    <span className="value">({props.talent.rating})</span>
                </FlexDiv>
                <FlexDiv className="centered">
                    <span className="verified">Verified</span>
                    <img src={VerifiedIcon}/>
                </FlexDiv>
            </RatingContainer>
            <TalentName>{props.talent.name}</TalentName>
            <FlexDiv className="location">
                <LocIcon src={LocationIcon}/>
                <Span>{props.talent.location}</Span>
            </FlexDiv>
            <FlexDiv className="travel">
                <Airplane src={FlightIcon}/>
                <Span>{props.talent.travel}</Span>
            </FlexDiv>
            <FlexDiv className="price">
                <img src={DollarIcon}/>
                <span className="priceSpan">{props.talent.price}</span>
            </FlexDiv>
            <ButtonsContainer>
                <BookButton>Book Now</BookButton>
                <div className="favouriteContainer">
                    <FavouriteButton><Heart src={HeartIcon}/><span className="favBtn">Add Favourites</span></FavouriteButton>
                </div>
            </ButtonsContainer>
        </Wrapper>
    </Container>
)

export default Card