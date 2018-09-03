import React from 'react'
import styled from 'styled-components'

import BackgroundImage from '../../../assets/svg/MixTape/music.jpg'

const Container = styled.div`
  width: 375px;
  height:560px;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  background-position: center;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const Span = styled.span`
  text-transform: capitalize;
  color: #ffffff;
  ${p => p.color && `color: ${p.color}`};
  ${p => p.bold && 'font-weight: bold'};
  ${p => p.size && `font-size: ${p.size}px`};
  ${p => p.lspacing && `letter-spacing: ${p.lspacing}px`};
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.color && `color: ${p.color}`};
  ${p => p.width && `width: ${p.width}px`};
`

const Advertisement = () => (
  <Container>
    <Span size={50} bold>Upload To</Span>
    <Span size={80} bold>MixTape<br />Madness</Span>
    <Span size={20} width={225}>Click To Contact Us and Find More</Span>
  </Container>
)

export default Advertisement
