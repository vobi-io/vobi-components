import React from 'react'
import styled from 'styled-components'

import { NavBar } from '../..'
import Table from './Table'


const Div = styled.div`
    width: 100%
    min-height: 1230px;
`
const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 53px;
`

const RequestListPage = () => (
    <Div>
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
        <Container>
            <Table tableTitle={offers} tableContent={offersContent}/>
            <Table tableTitle={sentRequests} tableContent={sentRequestContent}/>
        </Container>
    </Div>
)

const user = {
    avatar: 'https://avatars2.githubusercontent.com/u/2933601?s=460&v=4',
}

const offers = {
    title: "Offers",
    numberOf: "0",
}
const offersContent = []

const sentRequests = {
    title: "Sent Requests",
    numberOf: "2",
}
const sentRequestContent = [
    {
        avatar: "https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc",
        name: "Bugle Shaggy",
        dateKind: "Birthday Party",
        date: "12 Feb 2018 4:00 PM – 12 Feb 2018 5:30 PM",
        status: "Active",
        paid: "$ 100 / $1000",
        messages: "2 New"
    },
]

export default RequestListPage