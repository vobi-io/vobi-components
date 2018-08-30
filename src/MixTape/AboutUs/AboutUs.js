import React, { Component } from 'react'
import styled from 'styled-components'
import AboutUsSlider from "./AboutUsSlider";
import Header from "../Header";
import Grid from './Grid';


const AboutUsContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
`

export default (props) => {
    const { data } = props
    return (
        <AboutUsContainer>
            <Header />
            <AboutUsSlider />
            <Grid data={data} />
        </AboutUsContainer>
    )
}
