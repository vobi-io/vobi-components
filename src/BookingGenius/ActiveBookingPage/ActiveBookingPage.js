import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { NavBar } from '../..'
import { ArtistCard, MessageList } from '..'


import CalendarIcon from '../../../assets/svg/BookingGenius/Calendar.svg'
import CheckIcon from '../../../assets/svg/BookingGenius/Check.svg'

const user = {
    avatar: 'https://avatars2.githubusercontent.com/u/2933601?s=460&v=4'
}

const Body = styled.div`
    background-color: #f6f6f6;
    padding: 0 20px 12px;
    box-sizing: border-box;
    margin: 0 auto;
`

const HeadingRow = styled.div`
    display: flex;
    align-items: center;
`

const Heading = styled.h1`
    padding: 0;
    margin: 20 0;
    font-family: "Proxima Nova";
    font-size: 36px;
    font-weight: bold;
    color: #303030;
    display: inline-block;
    line-height: 44px;
    margin-right: 12px;
`

const Active = styled.span`
    border-radius: 5px;
    background-color: #07730d;
    font-family: "Proxima Nova";
    font-size: 18px;	
    font-weight: bold;	
    line-height: 22px;
    color: #fff;
    padding: 10px 23px;
    display: inline-block;
    user-select: none;
`

const Parent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
`

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 25px 25px 12px 30px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.17);
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 12px;
`

const EventRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const DetailsHeading = styled.h3`
    color: #303030;	
    font-family: "Proxima Nova";	
    font-size: 24px;	
    font-weight: 600;	
    line-height: 29px;
    padding: 8px 0;
    margin: 0;
`

const Number = styled.span`
    display: inline-block;
    opacity: 0.57;	
    color: #1F1E1E;	
    font-family: "Proxima Nova";	
    font-size: 16px;	
    font-weight: 600;	
    line-height: 20px;
`

const Light = styled.span`
    display: inline-block;
    color: #808080;	
    font-family: "Proxima Nova";	
    font-size: 16px;	
    font-weight: 600;	
    line-height: 20px;

    &.mb-3 {
        margin-bottom: 3px;
    }

    &.mb-4 {
        margin-bottom: 4px;
    }

    &.mb-5 {
        margin-bottom: 5px;
    }

    &.mb-15 {
        margin-bottom: 15px;
    }
`

const Dark = styled.span`
    display: inline-block;
    color: #1F1E1E;	
    font-family: "Proxima Nova";	
    font-size: 16px;	
    font-weight: 600;	
    line-height: 20px;

    &.mb-11 {
        margin-bottom: 11px;
    }

    &.mb-8 {
        margin-bottom: 8px;
    }

    &.mb-14 {
        margin-bottom: 14px;
    }
`

const Text = styled.span`
    display: inline-block;
    color: #1F1E1E;	
    font-family: "Proxima Nova";	
    font-size: 16px;		
    line-height: 20px;
`

const More = styled.span`
    color: #07730D;	
    font-family: "Proxima Nova";	
    font-size: 18px;	
    font-weight: 600;	
    line-height: 22px;
    display: inline-block;
    align-self: center;
    user-select: none;
    white-space: nowrap;
    margin-top: 9px;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

const Terms = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 25px 25px 12px 30px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.17);
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 16px;
`

const TermsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    &.mt-12 {
        margin-top: 12px;
    }

`
const TermItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%
`
const Icon = styled.img`
    display: inline-block;
    margin-right: 8px;
`

const FlexText = styled.div`
    display: flex;
`

const Bullet = styled.span`
    display: inline-block;
    margin-right: 10px;
`

const BookingDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 307px;
  background-color: #fff;
  border: solid 1px #dbdbdb;
  padding: 22px 26px 25px 31px;
  box-sizing: border-box;
  margin-top: 25px;
`

const BookingHeading = styled.h2`
    margin: 0 0 18px;
    padding: 0;
    color: #303030;	
    font-family: "Proxima Nova";	
    font-size: 24px;	
    font-weight: 600;	
    line-height: 29px;
`

const BookingRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;

`

const Green = styled.span`
    color: #07730D;	
    font-family: "Proxima Nova";	
    font-size: 24px;	
    font-weight: 600;	
    line-height: 29px;
`

const BookingButton = styled.button`
    display: block;
    text-align: center;
    white-space: nowrap;
    user-select: none;
    text-decoration: none;
    outline: 0;
    border: 1px solid #C1C1C1;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

    &:disabled {
        opacity: .65;
    }
    color: #332F2F;	
    font-family: "Proxima Nova";	
    font-size: 18px;	
    font-weight: bold;	
    line-height: 22px;
    padding: 12px 0;
    background: #fff;
    margin-top: 13px;
`

const ActiveBookingPage = props => (   
    <div>
        <NavBar
            brandName="BookingGenius"
            leftPages={[{
            title: 'Browse Talents',
            href: '#',
            }]}
            rightPages={[{
            title: 'Dashboard',
            href: '#',
            }, {
            title: 'Calendar',
            href: '#',
            }, {
            title: 'Requests',
            href: '#',
            }, {
            title: 'Bookings',
            href: '#',
            }, {
            title: 'Transactions',
            href: '#',
            }]}
            user={user}
        />
        <Body>
            <HeadingRow>
                <Heading>Booking</Heading>
                <Active>ACTIVE</Active>
            </HeadingRow>
            <Parent>
                <Left>
                    <DetailsContainer>
                        <EventRow>
                            <DetailsHeading>Event Details</DetailsHeading>
                            <Number>Number RF 213001</Number>
                        </EventRow>
                        <Light className="mb-3" >Type of Event</Light>
                        <Dark className="mb-11">Birthday Party</Dark>
                        <Light className="mb-5" >Start / End</Light>
                        <div>
                            <Icon src={CalendarIcon} />
                            <Dark className="mb-8">12 Feb 2018 4:00 PM – 12 Feb 2018 5:30 PM</Dark>
                        </div>
                        <Light className="mb-5" >Venue Location</Light>
                        <Dark className="mb-14">10 W 28th St, New York, NY, USA</Dark>
                        <Light className="mb-5" >Your message to the talent</Light>
                        <Text>Today, we’re going to take a look at some of the details you might not know about artist bookings; not only that, </Text>
                        <More>Show more</More>
                    </DetailsContainer>
                    <Terms>
                        <DetailsHeading>Additional Terms</DetailsHeading>
                        <TermsRow  className="mt-12" >
                            <TermItem>
                                <Light className="mb-4" >Number of hotel rooms required</Light>
                                <Dark>4 rooms</Dark>
                            </TermItem>
                            <TermItem>
                                <Light className="mb-4" >Flight tickets required</Light>
                                <Dark>2 tickets</Dark>
                            </TermItem>
                        </TermsRow>
                        <TermsRow>
                            <TermItem>
                                <Light className="mb-4" >Buy return tickets</Light>
                                <div>
                                    <Icon src={CheckIcon} />
                                    <Dark>Yes</Dark>
                                </div>
                            </TermItem>
                            <TermItem>
                                <Light className="mb-4" >Buy return tickets</Light>
                                <div>
                                    <Icon src={CheckIcon} />
                                    <Dark>Yes</Dark>
                                </div>
                            </TermItem>
                        </TermsRow>
                        <Light className="mb-15" >Food and beverages</Light>
                        <FlexText>
                            <Bullet>&bull;</Bullet>
                            <Text>Specific foods and beverages (typically water, but sometimes alcoholic beverages)</Text>
                        </FlexText>
                        <More>Show more</More>
                    </Terms>
                    <MessageList 
                        showInput 
                        messages={props.messages}
                    />
                </Left>
                <Right>
                    <ArtistCard 
                        artist={props.artist}
                    />
                    <BookingDetails>
                        <BookingHeading>Booking Details</BookingHeading>
                        <BookingRow>
                            <Dark>Status</Dark>
                            <Green>ACTIVE</Green>
                        </BookingRow>
                        <BookingRow>
                            <Dark>Total Booking fee</Dark>
                            <Green>$ 12,312</Green>
                        </BookingRow>
                        <BookingRow>
                            <Dark>Booking Deposit</Dark>
                            <Green>$ 1,312</Green>
                        </BookingRow>
                        <BookingButton>Finish</BookingButton>
                    </BookingDetails>
                </Right>
            </Parent>
        </Body>
    </div>
)

ActiveBookingPage.propTypes = {
    messages: PropTypes.object.isRequired,
    artist: PropTypes.object.isRequired
}

export default ActiveBookingPage
