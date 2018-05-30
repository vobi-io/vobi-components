import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { NavBar, SelectField, SelectOption, DatePicker, ReactTimePicker, TextField, Button } from '../../'
import { ArtistCard } from '../'

const Body = styled.div`
    background-color: #f6f6f6;
    width: 100%;
`

const Container = styled.div`
    max-width: 1200px;
    padding: 0 30px 20px;
    margin: 0 auto;
`

const Heading = styled.h1`
    font-family: ProximaNova;
    font-weight: bold;
    text-align: left;
    color: #303030;
    padding: 18px 0;
    margin: 0;
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const BookingDetails = styled.div`
    background: #fff
    display: flex;
    flex-direction: column;
    padding: 25px 20px;
    flex-grow: 1;
    margin-right: 25px;
`
const Text = styled.span`
    display: inline-block;
    font-family: ProximaNova;
    font-size: 24px;
    text-align: left;
    color: #303030;
    margin-bottom: 8px;
`

const Label = styled.span`
    display: inline-block;
    font-family: ProximaNova;
    font-size: 15px;
    text-align: left;
    color: #1f1e1e;
    opacity: 0.65;
    margin-bottom: 4px;
`

const DateRow = styled.div`
    display: flex;
    align-items: center;
`

const ButtonRow = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`

const RequestLayout = props => (
    <div>
        <NavBar
            brandName="BookingGenius"
            leftPages={[{
            title: 'About',
            href: '#',
            }, {
            title: 'Service',
            href: '#',
            }, {
            title: 'Browse',
            href: '#',
            }]}
        />
        <Body>
            <Container>
                <Heading>New Request</Heading>
                <Row>
                    <BookingDetails>
                        <Text>Details</Text>
                        <Label>Type of Event</Label>
                        <SelectField style={{ width: '320px'}}>
                            <SelectOption>Party</SelectOption>
                            <SelectOption>Festival</SelectOption>
                        </SelectField>
                        <Label>Start / End</Label>
                        <DateRow>

                        </DateRow>
                        <Label>Venue Location</Label>
                        <TextField
                            fullWidth
                            flat
                            labelText=""
                            placeholder="Enter venue location"
                            rows={null}
                        />
                        <Label>Venue Location</Label>
                        <TextField
                            fullWidth
                            flat
                            labelText=""
                            placeholder="Optional message..."
                            multiLine
                            rows={6}
                            disableResize
                        />
                        <Label>Fee</Label>
                        <TextField
                            style={{ width: '180px' }}
                            flat
                            labelText=""
                            placeholder="Enter price"
                            rows={null}
                        />
                        <ButtonRow>
                            <Button
                                bg="#07730d"
                                color="#fff"
                                bold
                                style={{marginRight: '10px'}}
                                >
                                Send Request
                            </Button>
                            <Button bold>Cancel</Button>
                        </ButtonRow>
                    </BookingDetails>
                    <ArtistCard
                        artist={{
                            avatar: 'https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc',
                            fullName: 'Bugle Shaggy',
                            verified: true,
                            address: 'New York, NY, United States',
                            tags: ['Reggae', 'ska', 'rocksteady'],
                            rating: 4,
                            reviews: ['', '', '', '', ''],
                            price: {
                            min: 300,
                            max: 1500,
                            },
                        }}
                    />
                </Row>
            </Container>
        </Body>
    </div>
)

RequestLayout.propTypes = {
    
}

export default RequestLayout