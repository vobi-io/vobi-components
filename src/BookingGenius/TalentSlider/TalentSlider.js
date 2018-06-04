import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Slider from "react-slick"

import { Rating } from '../..'
import Prev from '../../../assets/svg/BookingGenius/Prev.svg'
import Next from '../../../assets/svg/BookingGenius/Next.svg'


const Img = styled.img`
    display: block;   
    cursor: pointer;
    margin-top: 79px;
`


const PrevArrow = ({onClick}) => (
    <Img src={Prev} onClick={onClick} />
)

const NextArrow = ({onClick}) => (
    <Img src={Next} onClick={onClick} />
)

const Container = styled.div`
    .slick-slider
    {
        position: relative;

        display: block;
        box-sizing: border-box;

        -webkit-user-select: none;
        -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;

        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
            touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
    }

    .slick-list
    {
        position: relative;

        display: block;
        overflow: hidden;

        margin: 0;
        padding: 0;
    }
    .slick-list:focus
    {
        outline: none;
    }
    .slick-list.dragging
    {
        cursor: pointer;
        cursor: hand;
    }

    .slick-slider .slick-track,
    .slick-slider .slick-list
    {
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
    }

    .slick-track
    {
        position: relative;
        top: 0;
        left: 0;

        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .slick-track:before,
    .slick-track:after
    {
        display: table;

        content: '';
    }
    .slick-track:after
    {
        clear: both;
    }
    .slick-loading .slick-track
    {
        visibility: hidden;
    }

    .slick-slide
    {
        display: none;
        float: left;

        height: 100%;
        min-height: 1px;
    }
    [dir='rtl'] .slick-slide
    {
        float: right;
    }
    .slick-slide img
    {
        display: block;
    }
    .slick-slide.slick-loading img
    {
        display: none;
    }
    .slick-slide.dragging img
    {
        pointer-events: none;
    }
    .slick-initialized .slick-slide
    {
        display: block;
    }
    .slick-loading .slick-slide
    {
        visibility: hidden;
    }
    .slick-vertical .slick-slide
    {
        display: block;

        height: auto;

        border: 1px solid transparent;
    }
    .slick-arrow.slick-hidden {
        display: none;
    }

    .slick-prev,
    .slick-next
    {
        font-size: 0;
        line-height: 0;

        position: absolute;
        top: 50%;

        display: block;

        width: 20px;
        height: 20px;
        padding: 0;
        -webkit-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        transform: translate(0, -50%);

        cursor: pointer;

        color: transparent;
        border: none;
        outline: none;
        background: transparent;
    }
    .slick-prev:hover,
    .slick-prev:focus,
    .slick-next:hover,
    .slick-next:focus
    {
        color: transparent;
        outline: none;
        background: transparent;
    }
    .slick-prev:hover:before,
    .slick-prev:focus:before,
    .slick-next:hover:before,
    .slick-next:focus:before
    {
        opacity: 1;
    }
    .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before
    {
        opacity: .25;
    }

    .slick-prev:before,
    .slick-next:before
    {
        font-family: 'slick';
        font-size: 20px;
        line-height: 1;

        opacity: .75;
        color: white;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .slick-prev
    {
        left: -25px;
    }
    [dir='rtl'] .slick-prev
    {
        right: -25px;
        left: auto;
    }
    .slick-prev:before
    {
        content: '←';
    }
    [dir='rtl'] .slick-prev:before
    {
        content: '→';
    }

    .slick-next
    {
        right: -25px;
    }
    [dir='rtl'] .slick-next
    {
        right: auto;
        left: -25px;
    }
    .slick-next:before
    {
        content: '→';
    }
    [dir='rtl'] .slick-next:before
    {
        content: '←';
    }

    /* Dots */
    .slick-dotted.slick-slider
    {
        margin-bottom: 30px;
    }

    .slick-dots
    {
        position: absolute;
        bottom: -25px;

        display: block;

        width: 100%;
        padding: 0;
        margin: 0;

        list-style: none;

        text-align: center;
    }
    .slick-dots li
    {
        position: relative;

        display: inline-block;

        width: 20px;
        height: 20px;
        margin: 0 5px;
        padding: 0;

        cursor: pointer;
    }
    .slick-dots li button
    {
        font-size: 0;
        line-height: 0;

        display: block;

        width: 20px;
        height: 20px;
        padding: 5px;

        cursor: pointer;

        color: transparent;
        border: 0;
        outline: none;
        background: transparent;
    }
    .slick-dots li button:hover,
    .slick-dots li button:focus
    {
        outline: none;
    }
    .slick-dots li button:hover:before,
    .slick-dots li button:focus:before
    {
        opacity: 1;
    }
    .slick-dots li button:before
    {
        font-family: 'slick';
        font-size: 6px;
        line-height: 20px;

        position: absolute;
        top: 0;
        left: 0;

        width: 20px;
        height: 20px;

        content: '•';
        text-align: center;

        opacity: .25;
        color: black;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .slick-dots li.slick-active button:before
    {
        opacity: .75;
        color: black;
    }

`

const Override = styled.div`
    .slick-slider {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 1200px;
        margin: 0 auto;
    }

    .slick-list {
        width: 1080px;
    }

    .slick-slide {
        display: flex !important;
    }

    .slick-current ~ .slick-slide {
        justify-content: center; 
    }

    .slick-current ~ .slick-slide ~.slick-slide {
        justify-content: flex-end; 
    }

    .slick-current {
        justify-content: flex-start !important;
    }
`

const Heading = styled.h2`
    font-family: Raleway;
    font-size: 22px;
    font-weight: bold;
    color: #2F3033;
    margin: 0 auto 22px;
    padding: 0;
    width: 1080px;
    text-transform: capitalize;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`
const Main = Column.extend`
    width: 350px !important;
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
    text-transform: capitalize;
`

const Prof = styled.span`
    display: inline-block;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 800;
    color: #6b6e75;
    margin-bottom: 3px;
    text-transform: uppercase;
`

const SelfEnd = styled.div`
    align-self: flex-end;
`

const Review = styled.span`
    font-family: Lato;
    display: inline-block;
    font-size: 14px;
    color: #9396a0;
`

class TalentSlider extends React.Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
      return (
        <Container>
            <Override>
                <Heading>{this.props.heading}</Heading>
                <Slider {...settings}>
                    {this.props.artistList.map((artist, index) => (
                        <Main key={index}>
                            <Image src={artist.img} />
                            <Desc>
                                <Column>
                                    <Prof>{artist.profession}</Prof>
                                    <Name>{artist.fullName}</Name>
                                </Column>
                                <Column>
                                    <SelfEnd>
                                        <Rating value={artist.rating} disabled={false} size={18} />
                                    </SelfEnd>
                                    <Review>{`${artist.reviewCount} reviews`}</Review>
                                </Column>
                            </Desc>
                        </Main>
                    ))}
                </Slider>
            </Override>
        </Container>
      );
    }
  }

TalentSlider.propTypes = {
    artistList: PropTypes.array.isRequired,
    heading: PropTypes.string.isRequired
}

export default TalentSlider
