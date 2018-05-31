import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BookingTable from './BookingTable'



const Active = props => (
    <BookingTable booking={props.activeBooking} bookingContent={props.activeBookingContent}/>
)

Active.propTypes = {
    booking: PropTypes.object,
    bookingContent: PropTypes.array,
}


export default Active

