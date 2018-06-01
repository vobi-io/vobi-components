import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Rating } from '../..'
import DollarIcon from '../../../assets/svg/BookingGenius/Dollar.svg'

const Heading = styled.h2`
    font-family: Raleway;
    font-size: 22px;
    font-weight: bold;
    line-height: 66px;
    color: #2F3033;
    margin: 0;
    padding: 0;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const Desc = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
`

const Image = styled.div`
    width: 350px;
    height: 180px;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
`

const Name = styled.span`
    display: inline-block;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 600;
    color: #2f3033;
`

const Prof = styled.span`
    display: inline-block;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 800;
    color: #6b6e75;
    margin-bottom: 2px;
`

const Review = styled.span`
    font-family: Lato;
    display: inline-block;
    font-size: 14px;
    color: #9396a0;
    margin-top: 1px;
`

class TalentSlider extends React.Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        //nextArrow: <NextArrow />,
        //prevArrow: <PrevArrow />
      };
      return (
        <div>
          <h2>Custom Arrows</h2>
          <Slider {...settings}>
            <Column>
                <Image src={'https://timedotcom.files.wordpress.com/2017/10/paris-hilton-djs.jpg'} />
                <Desc>
                    <Column>
                        <Prof>DANCER</Prof>
                        <Name>David Lakovsky</Name>
                    </Column>
                    <Column>
                        <Rating value={5} disabled={false} size={13} />
                        <Review>93 reviews</Review>
                    </Column>
                </Desc>
            </Column>
            <Column>
                <Image src={'https://timedotcom.files.wordpress.com/2017/10/paris-hilton-djs.jpg'} />
                <Desc>
                    <Column>
                        <Prof>DANCER</Prof>
                        <Name>David Lakovsky</Name>
                    </Column>
                    <Column>
                        <Rating value={5} disabled={false} size={13} />
                        <Review>93 reviews</Review>
                    </Column>
                </Desc>
            </Column>
            <Column>
                <Image src={'https://timedotcom.files.wordpress.com/2017/10/paris-hilton-djs.jpg'} />
                <Desc>
                    <Column>
                        <Prof>DANCER</Prof>
                        <Name>David Lakovsky</Name>
                    </Column>
                    <Column>
                        <Rating value={5} disabled={false} size={13} />
                        <Review>93 reviews</Review>
                    </Column>
                </Desc>
            </Column>
            <Column>
                <Image src={'https://timedotcom.files.wordpress.com/2017/10/paris-hilton-djs.jpg'} />
                <Desc>
                    <Column>
                        <Prof>DANCER</Prof>
                        <Name>David Lakovsky</Name>
                    </Column>
                    <Column>
                        <Rating value={5} disabled={false} size={13} />
                        <Review>93 reviews</Review>
                    </Column>
                </Desc>
            </Column>
            <Column>
                <Image src={'https://timedotcom.files.wordpress.com/2017/10/paris-hilton-djs.jpg'} />
                <Desc>
                    <Column>
                        <Prof>DANCER</Prof>
                        <Name>David Lakovsky</Name>
                    </Column>
                    <Column>
                        <Rating value={5} disabled={false} size={13} />
                        <Review>93 reviews</Review>
                    </Column>
                </Desc>
            </Column>
            <Column>
                <Image src={'https://timedotcom.files.wordpress.com/2017/10/paris-hilton-djs.jpg'} />
                <Desc>
                    <Column>
                        <Prof>DANCER</Prof>
                        <Name>David Lakovsky</Name>
                    </Column>
                    <Column>
                        <Rating value={5} disabled={false} size={13} />
                        <Review>93 reviews</Review>
                    </Column>
                </Desc>
            </Column>
          </Slider>
        </div>
      );
    }
  }

TalentSlider.propTypes = {

}

export default TalentSlider
