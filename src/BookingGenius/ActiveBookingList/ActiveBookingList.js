import React from 'react'
import styled from 'styled-components'

import { NavBar } from '../..'
import { text } from '@storybook/addon-knobs'
import Active from './Active'
import UpComing from './UpComing'
import Past from './Past'

function getWidthString(span) {
    if(!span) return;

    let width = span / 12 * 100;
    return `width: ${width}%`;
}

const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
`
const Column = styled.div`

   ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

    @media only screen and (min-width: 300){
        ${({ xsm }) => xsm && getWidthString(xsm)};
    }
    @media only screen and (min-width: 768px){
        ${({ sm }) => sm && getWidthString(sm)};
    }

    @media only screen and (min-width: 992px){
        ${({ md })=> md && getWidthString(md)};
    }

    @media only screen and (min-width: 1200px){
        ${({ lg })=> lg && getWidthString(lg)};
    }

    @media only screen and (min-width: 1700px){
        ${({ xlg })=> xlg && getWidthString(xlg)};
    }

`

const Container = styled.div`
    width: 100%;
`


const ActiveBookingList = () => (
    <Container>
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
        <Active activeBooking={activeBooking} activeBookingContent={activeBookingContent}/>
        <UpComing upcomingBooking={upcomingBooking} upcomingBookingContent={upcomingBookingContent}/>
        <Past pastBooking={pastBooking} pastBookingContent={pastBookingContent}/>
    </Container>
)


const user = {
    avatar: text('Avatar', 'https://avatars2.githubusercontent.com/u/2933601?s=460&v=4'),
}

const activeBooking = {
    title: "Active Bookings",
    numberOf: "1",
}
const activeBookingContent = [
    {
        avatar: "https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc",
        name: "Bugle Shaggy",
        dateKind: "Birthday Party",
        date: "12 Feb 2018 4:00 PM – 12 Feb 2018 5:30 PM",
        status: "ACTIVE",
        paid: "$ 100 / $1000",
        messages: "2 New"
    },
]

const upcomingBooking = {
    title: "Upcoming Bookings",
    numberOf: "2",
}
const upcomingBookingContent = [
    {
        avatar: "https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc",
        name: "Bugle Shaggy",
        dateKind: "Birthday Party",
        date: "12 Feb 2018 4:00 PM – 12 Feb 2018 5:30 PM",
        status: "Upcoming",
        paid: "$ 100 / $1000",
        messages: ""
    },
    {
        avatar: "https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc",
        name: "Bugle Shaggy",
        dateKind: "Birthday Party",
        date: "12 Feb 2018 4:00 PM – 12 Feb 2018 5:30 PM",
        status: "Upcoming",
        paid: "$ 100 / $1000",
        messages: ""
    },
]

const pastBooking = {
    title: "Past Bookings",
}

const pastBookingContent = [
    {
        avatar: "https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc",
        name: "Bugle Shaggy",
        dateKind: "Birthday Party",
        date: "12 Feb 2018 4:00 PM – 12 Feb 2018 5:30 PM",
        status: "Archive",
        paid: "$ 100 / $1000",
        messages: ""
    },
    {
        avatar: "https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc",
        name: "Bugle Shaggy",
        dateKind: "Birthday Party",
        date: "12 Feb 2018 4:00 PM – 12 Feb 2018 5:30 PM",
        status: "Archive",
        paid: "$ 100 / $1000",
        messages: ""
    },
]


export default ActiveBookingList