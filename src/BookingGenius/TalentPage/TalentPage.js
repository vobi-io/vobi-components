import React from 'react'
import styled from 'styled-components'
import { text, boolean, number, array } from '@storybook/addon-knobs'


import Header from './Header'
import Notifications from './Notifications'
import Messages from './Messages'
import UpcomingBookings from './UpcomingBookings';
import BookingTerms from './BookingTerms'
import Financials from './Financials'
import ArtistCard from '../ArtistCard'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
`
const Margins = styled.div`
    width: 1214px;
    display: flex;
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 895px;
`
const Aside = styled.div`
    margin: 77px 0px 0px 12px;
    width: 307px;
`

const TalentPage = () => (
    <Container>
        <Header/>
        <Margins>
            <Main>
                <Notifications notifications = {notifications}/>
                <Messages messages = {messages}/>
                <UpcomingBookings upcomingbookings = {upcomingbookings}/>
            </Main>
            <Aside>
                <ArtistCard
                    artist={{
                        avatar: text('Avatar', 'https://www.hellomagazine.com/imagenes/celebrities/2017101143124/angelina-jolie-womens-rights-harpers-bazaar/0-220-355/angelina-jolie-womens-rights-t.jpg'),
                        fullName: text('Full name', 'Bugle Shaggy'),
                        verified: boolean('Verified', false),
                        address: text('Address', 'New York, NY, United States'),
                        tags: array('Tags', ['Reggae', 'ska', 'rocksteady']),
                        rating: number('Rating', 4),
                        reviews: array('Reviews', ['1', '2', '3', '4', '5']),
                        price: {
                        min: number('Price Min', 300),
                        max: number('Price max', 1500),
                        },
                    }} view={true}
                />
                <BookingTerms bookingTerms = {bookingTerms}/>
                <Financials financials = {financials}/>
            </Aside>
        </Margins>
    </Container>
)


const notifications = [
    {
        text: "Bugle Shaggy send you a ",
        message: "message",
        date: "February 27, 2018 11:00AM",
    },
    {
        text: "expires in 3 days",
        subscription: "Subscription ",
        date: "February 29, 2018 2:00PM",
    }
]

const messages = [
    {
        avatar: "https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc",        
        name: "Nick Johnson",
        date: "21 Mar 2018",
        message: "Okay :)",
    },
    {
        avatar: "https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc",
        name: "Ted Rogers",
        date: "20 Mar 2018",
        message: "Ok, good luck, if you ll need an apartment, don t hesitate, tell me what price you can pay and I help you.",
        message1: "Regards, Ted Rogers",
    }
]

const upcomingbookings = [
    {
        avatar: "https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc",
        name: "Ted Rogers",
        dateName: "Birthday Party",
        date: "12 Feb 2018 4:00 PM – 12 Feb 2018 5:30 PM",
        status: "Active",
        paid: "$ 100 / $1000",
    },
    {
        avatar: "https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc",
        name: "David Montrik",
        dateName: "Birthday Party",
        date: "10 Feb 2018 4:00 PM – 11 Feb 2018 5:30 PM",
        status: "Active",
        paid: "$ 1000 / $1000",
    }
]

const bookingTerms = {
    bookingRate: "$50",
    depositRateAmount: "$200",
    minimumBooking: "1 day",
    cancellationPolicy: "3 days",
    depositRequired: "$100"
}

const financials = {
    balance: "$1250",
    earningsDue: "$500",
    earningsPaid: "$250",
}


export default TalentPage