import React from 'react'
import styled from 'styled-components'

import { NavBar } from '../..'

const Container = styled.div`
    width: 100%;
`

const Header = () => (
    <Container>
        <NavBar
            brandName="BookingGenius"
            rightPages={[{
                title: 'About',
                href: '#',
            }, {
                title: 'Service',
                href: '#',
            }, {
                title: 'Browse',
                href: '#',
            }, {
                title: 'Dashboard',
                href: '#',
            }, {
                title: 'FAQ',
                href: '#',
            }, {
                title: 'Help',
                href: '#',
            }]}
        />
    </Container>
)

export default Header