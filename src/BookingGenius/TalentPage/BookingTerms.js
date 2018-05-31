import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from './Button'

const Container = styled.div`
    margin-top: 19px;
    width: 307px;
    background-color: #ffffff;
    border: solid 1px #dbdbdb;
`
const Wrapper = styled.div`
    padding: 22px 24px 21px 24px;
`
const Title = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #555555;
`
const StyledDiv = styled.div`
    margin-top: 15px;
    margin-bottom: 6px;
`
const BookingTermsContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
`
const Name = styled.span`
    opacity: 0.64;
    font-size: 16px;
    font-weight: 600;
    color: #1f1e1e;
`
const Data = styled.span`
    font-size: 16px;
    color: #2f3033;
`

const BookingTerms = props => (
    <Container>
        <Wrapper>
            <Title>Booking Terms</Title>
            <StyledDiv>
                <BookingTermsContent>
                    <Name>Booking Rate</Name>
                    <Data>{props.bookingTerms.bookingRate}</Data>
                </BookingTermsContent>
                <BookingTermsContent>
                    <Name>Deposit Rate Amount</Name>
                    <Data>{props.bookingTerms.depositRateAmount}</Data>
                </BookingTermsContent>
                <BookingTermsContent>
                    <Name>Minimum Booking</Name>
                    <Data>{props.bookingTerms.minimumBooking}</Data>
                </BookingTermsContent>
                <BookingTermsContent>
                    <Name>Cancellation policy</Name>
                    <Data>{props.bookingTerms.cancellationPolicy}</Data>
                </BookingTermsContent>
                <BookingTermsContent>
                    <Name>Deposit required</Name>
                    <Data>{props.bookingTerms.depositRequired}</Data>
                </BookingTermsContent>
            </StyledDiv>
            <Button display = {"Edit Booking Terms"}/>
        </Wrapper>
    </Container>
)

BookingTerms.propTypes = {
    bookingTerms: PropTypes.object.isRequired,
}

export default BookingTerms