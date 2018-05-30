import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
`
const Title = styled.div`
    margin-top: 87px;
    width: 51.8%;
    height: 104px;
    text-align: center;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    font-size: 42px;
    font-weight: bold;
    line-height: 1.24;
    color: #2f3033;
`
const Paragraph = styled.div`
    margin-top: 36px;
    width: 63.6%;
    line-height: 1.45;
    font-size: 22px;
    color: #2f3033;
    padding: 0px;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
`

const Description = () => (
    <Container>
        <Title>
            <span>Hire a talent for your party in the best way possible!</span>
        </Title>
        <Paragraph>
            <span>
                Birthday party, wedding, funeral, you name it – BookingGenius can help you
                find a talent for any occasion.
            </span>
        </Paragraph>
    </Container>
)

export default Description