import React from 'react'
import styled from "styled-components";

import Header from "../Header";
import NewsSlider from "./NewsSlider";

const NewsContainer = styled.div`
    width:1024px;
    display:flex;
    margin:auto;
    flex-direction:column;
`

export default () => {
    return (
        <NewsContainer>
            <Header />
            <NewsSlider />
        </NewsContainer>
    )
}
