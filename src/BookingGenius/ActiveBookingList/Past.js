import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BookingTable from './BookingTable'



const Past = props => (
    <BookingTable booking={props.pastBooking} bookingContent={props.pastBookingContent}/>
)


Past.propTypes = {
    booking: PropTypes.object,
    bookingContent: PropTypes.array,
}


export default Past