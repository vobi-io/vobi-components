import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Slider from "react-slick"
import "~../../../assets/svg/BookingGenius/slick/slick.css"; 
import "~../../../assets/svg/BookingGenius/slick/slick-theme.css";

import { Rating } from '../..'
import DollarIcon from '../../../assets/svg/BookingGenius/Dollar.svg'

const Heading = styled.h2`
    font-family: Raleway;
    font-size: 22px;
    font-weight: bold;
    line-height: 66px;
    color: #2F3033;
    margin: 0 0 2px;
    padding: 0;
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
        //autoplay: true,
        //autoplaySpeed: 3500,
        //nextArrow: <NextArrow />,
        //prevArrow: <PrevArrow />
      };
      return (
        <div>
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
                            <Rating value={artist.rating} disabled={false} size={18} style={{ alignSelf: 'flex-end'}}/>
                            <Review>{`${artist.reviewCount} reviews`}</Review>
                        </Column>
                    </Desc>
                </Main>
            ))}
          </Slider>
        </div>
      );
    }
  }

TalentSlider.propTypes = {
    artistList: PropTypes.array.isRequired,
    heading: PropTypes.string.isRequired
}

TalentSlider.defaultProps = {
    artistList: [
        {
            img: 'https://i.imgur.com/yl34Ayi.png',
            profession: 'dancer',
            fullName: 'David Lakovsky',
            rating: 5,
            reviewCount: 93
        },
        {
            img: 'https://i.imgur.com/19HpIUV.png',
            profession: 'singer',
            fullName: 'Hue Montorello',
            rating: 1,
            reviewCount: 98
        },
        {
            img: 'https://i.imgur.com/pb0Zb3S.png',
            profession: 'dj',
            fullName: 'Lui Nesh',
            rating: 4,
            reviewCount: 134
        },
        {
            img: 'https://i.imgur.com/5IXinO1.png',
            profession: 'singer',
            fullName: 'Elisabeth Vekkel',
            rating: 3,
            reviewCount: 255
        },
        {
            img: 'https://i.imgur.com/Sx75sVi.png',
            profession: 'magician',
            fullName: 'Henry Celigber',
            rating: 5,
            reviewCount: 23
        },
        {
            img: 'https://i.imgur.com/eF9yQFF.png',
            profession: 'dj',
            fullName: 'Pola Makkensy',
            rating: 2,
            reviewCount: 55
        }
    ],
    heading: 'All Talents'
}

export default TalentSlider
