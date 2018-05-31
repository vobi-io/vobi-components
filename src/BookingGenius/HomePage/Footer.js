import React from 'react'
import styled from 'styled-components'

import FacebookIcon from './FacebookIcon'
import TwitterIcon from './TwitterIcon'
import PinterestIcon from './PinterestIcon'
import InstagramIcon from './InstagramIcon';

const Container = styled.div`
    margin-top: 120px;
    background-color: #1a1a1a;
    height: 142px;
    width: 100%;
`
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 23px;
    margin-left: auto;
    margin-right: auto;
    width: 1200px;
`
const Title = styled.div`
    font-size: 30px;
    color: #ffffff;

`
const CopyRight = styled.div`
    margin-top: 26px;
    color: #ffffff;
    font-size: 12px;
    line-height: 1.42;
`
const FlexDiv = styled.div`
    display: flex;
    width: 117.9px;
    justify-content: space-evenly;
    align-items: center;
`
const Footer = () => (
    <Container>
        <Div>
            <div>
                <Title>BookingGenius</Title>
                <CopyRight>
                    <span>
                        © 2017 BookingGenius<br />
                        All rights reserved.
                    </span>
                </CopyRight>
            </div>
            <FlexDiv>
                <FacebookIcon />
                <TwitterIcon />
                <PinterestIcon />
                <InstagramIcon />
            </FlexDiv>
        </Div>
    </Container>
)

export default Footer