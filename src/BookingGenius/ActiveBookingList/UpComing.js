import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BookingTable from './BookingTable'



const UpComing= props => (
    <BookingTable booking={props.upcomingBooking} bookingContent={props.upcomingBookingContent}/>
)

UpComing.propTypes = {
    booking: PropTypes.object,
    bookingContent: PropTypes.array,
}




export default UpComing