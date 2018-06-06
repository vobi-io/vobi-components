import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Event from './Event'
import EventVideo from './EventVideo'


const Container = styled.div`
    max-width: 840px;
    margin-top: 40px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.11);
    .padding{
        padding: 0px 24px 20px 24px;
    }
    @media only screen and (max-width:900px){
        max-width: 700px;
    }
`
const Title = styled.span`
    font-size: 22px;
    font-weight: bold;
    line-height: 3;
    color: #2f3033;
`
const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`


const RecentEvents = props => (
    <Container>
        <div className="padding">
            <Title>Recent Events</Title>
            <FlexDiv>
                <EventVideo data={props.data}/>
                <Event eventInfo={props.eventInfo}/>
            </FlexDiv>
        </div>
    </Container>
)


RecentEvents.propTypes = {
    data: PropTypes.object.isRequired,
    eventInfo: PropTypes.array.isRequired,
}

export default RecentEvents