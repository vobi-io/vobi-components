import React from 'react'
import styled from 'styled-components'

const newsSliderImg = 'https://static1.squarespace.com/static/52c723b4e4b0b6f0473fa0c7/52c73e8ee4b0b674fecbb8d6/5ab0190303ce6497ede69670/1521490244848/music_Autonomics_coBandcamp_4344.jpg?format=1000w'
const NewsSlliderContainer = styled.div`
    width:100%;
    flex-direction:column;
`

const SlliderImg = styled.div`
    width:100%;
    height:500px;
    margin-top:20px;
    background-image:url(${props => props.src});
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
    position:relative;
`

const NewsSlliderWrapper = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    background-color:rgba(0,0,0,0.5);
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:26px;
    text-align:center;
`

const SliderText = styled.h1`
    width:80%;
    color:#fff;
`

export default () =>
  (
    <NewsSlliderContainer>
      <SlliderImg src={newsSliderImg}>
        <NewsSlliderWrapper>
          <SliderText>
            Browse The Latest News On MixTape Madness
          </SliderText>
        </NewsSlliderWrapper>
      </SlliderImg>
    </NewsSlliderContainer>
  )

