import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Raiting from '../../Rating'
import BtnArrow from './BtnArrow'

const Container = styled.div`
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 1200px;
    margin-top: 121px;
`
const Title = styled.div`
    height: 104px;
    color: #2f3033;
    font-size: 42px;
    font-weight: bold;
    line-height: 1.24;
    text-align: center;
`
const Div = styled.div`
    width: 100%;
    height: 473px;
    background-color: #f8f9fb;

`
const ReviewContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const Review = styled.div`
    margin-top: 64px;
    width: 561px;
    height: 278px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 25px 0 rgba(4, 32, 59, 0.05);
`
const Wrapper = styled.div`
    margin: 32px 34px 28px 35px;

`
const Raitings = styled.div`
    display: flex;
    justify-content: space-between;
`
const Date = styled.div`
    color: #adb3b9;
    font-size: 14px;
    line-height: 1.86;
`
const ReviewDescription = styled.div`
    margin-top: 21px;
    color: #4f5254;
    font-size: 17px;
    font-weight: bold;
    line-height: 1.53;
    display: flex;
    flex-direction: column;
    .description{
        margin-top: 6px;
        line-height: 1.63;
    }
`
const Person = styled.div`
    display: flex;
    margin-top: 9px;
`
const Avatar = styled.img`
    border-radius: 50%;
    width: 42px;
    height: 42px;
`
const MarginLeft = styled.div`
    margin-left: 13px;
`
const Name = styled.div`
    color: #4f5254;;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.64;
`
const Profession = styled.div`
    color: #b1b6bc;
    font-size: 14px;
    line-height: 1.64;
`
const ChangeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1151px;
    margin-top: 19px;
    margin-right: auto;
    margin-left: auto;
    .emptyDiv{
        width: 220px;
    }
`
const CirclesContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 17px;
    .circleActive{
        height: 11.2px;
        width: 11.2px;
        border-radius: 50%;
        margin-right: 5.25px;
        margin-left: 5.25px;
        background-color: #07730d;
    }
    .circle{
        height: 11.2px;
        width: 11.2px;
        border-radius: 50%;
        margin-right: 5.25px;
        margin-left: 5.25px;
        background-color: #dfe7ee;
    }
`

const BtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 220px;
`
const ButtonForward = styled.button`
    display: flex;
    justify-content: center;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #07730d;
    border-radius: 8px;
    width: 100px;
    height: 54px;
    box-shadow: 0 4px 25px 0 rgba(4, 32, 59, 0.05);
`
const ButtonBack = styled.button`
    display: flex;
    justify-content: center;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    margin-right: 20px;
    background-color: #dfe3e8;
    border-radius: 8px;
    width: 100px;
    height: 54px;
    box-shadow: 0 4px 25px 0 rgba(4, 32, 59, 0.05);
    transform: rotate(180deg);
`

const Reviews = props => (
    <Container>
        <Title><span>What people are saying about BookingGeinus</span></Title>
        <Div>
            <ReviewContainer>
                {props.reviews.map((item, index) => (
                    <Review key={index}>
                        <Wrapper>
                            <Raitings>
                                <Raiting color2={"#07730d"} value={item.value} size= {25}/>
                                <Date><span>{item.date}</span></Date>
                            </Raitings>
                            <ReviewDescription>
                                <span>{item.service}</span>
                                <span className="description">{item.description}</span>
                            </ReviewDescription>
                            <Person>
                                <Avatar src={item.avatar} />
                                <MarginLeft>
                                    <Name>{item.name}</Name>
                                    <Profession>{item.profession}</Profession>
                                </MarginLeft>
                            </Person>
                        </Wrapper>
                    </Review>
                ))}
            </ReviewContainer>
            <ChangeContainer>
                <div className="emptyDiv">

                </div>
                <CirclesContainer>
                    <span className="circleActive"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </CirclesContainer>
                <BtnContainer>
                    <ButtonBack><BtnArrow/></ButtonBack>
                    <ButtonForward><BtnArrow /></ButtonForward>
                </BtnContainer>
            </ChangeContainer>
        </Div>
    </Container>
)

Reviews.propTypes = {
    reviews: PropTypes.array.isRequired,
}

export default Reviews