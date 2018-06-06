import React from 'react'
import styled from 'styled-components'


import LocationIcon from '../../../assets/svg/BookingGenius/Location.svg'
import CalendarIcon from '../../../assets/svg/BookingGenius/CalendarDif.svg'


const EventContainer = styled.div`
    width: 274px;
    &:not(:first-child){
        margin-top: 22px;
    }
    @media only screen and (max-width:900px){
        margin-top: 19px;
        &:not(:last-child){
            margin-right: 20px;
        }
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:900px){
        flex-direction: row;
    }
`
const Img = styled.img`
    width: 100%;
    height: 115px;
    border-radius: 4px;
`
const Info = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    opacity: 0.6;
    font-weight: 500;
    line-height: 1.67;
    color: #747882;
    .center{
        display: flex;
        align-items: center;
    }
`
const LocationIconHolder = styled.img`
    width: 16px;
    height: 16px;
`
const CalendarIconHolder = styled.img`
    width: 12px;
    height: 14px;
`
const Span = styled.span`
    margin-left: 8px;
    &.loc{
        margin-left: 3px;
    }
`



const Event = props => (
    <Container>
        {props.eventInfo.map((item, index)=> (
            <EventContainer key={index}>
                <Img src={item.img}/>
                <Info>
                    <div className="center">
                        <LocationIconHolder src={LocationIcon}/>
                        <Span className="loc">{item.location}</Span>
                    </div>
                    <div className="center">
                        <CalendarIconHolder src={CalendarIcon}/>
                        <Span>{item.date}</Span>
                    </div>
                </Info>
            </EventContainer>
        ))}
    </Container>
)

export default Event