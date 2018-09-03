import React, { Component } from 'react'
import styled from 'styled-components'

import AboutUsSlider from "./AboutUsSlider";
import Header from "../Header";
import Grid from './Grid';

import Footer from '../Footer'

const AboutUsContainer = styled.div`
    width:1024px;
    display:flex;
    align-items:center;
    flex-direction:column;
    margin:auto;
`

export default (props) => {
    const { data } = props
    return (
        <AboutUsContainer>
            About Us
            <Header />
            <AboutUsSlider />
            <Grid data={data} />
            <Footer />
        </AboutUsContainer>
    )
}
