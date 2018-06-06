import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


import FacebookIcon from '../../../assets/svg/BookingGenius/FacebookGreen.svg'
import InstagramIcon from '../../../assets/svg/BookingGenius/Instagram.svg'
import TwitterIcon from '../../../assets/svg/BookingGenius/Twitter.svg'


const Container = styled.div`
    width: 840px;
    margin-top: 40px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.11);
    .info{
        display: flex;
        flex-direction: column;
        padding-left: 24px;
        padding-right: 30px;
    }
`
const Title = styled.span`
    font-size: 22px;
    font-weight: bold;
    line-height: 3;
    color: #2f3033;
`
const Introduction = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.31;
    color: #2f3033;
`
const Description = styled.span`
    margin-top: 20px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.31;
    color: #2f3033;
`
const Social = styled.div`
    display: flex;
    margin-top: 16.9px;
    padding-bottom: 16.8px;
`
const SocialIcon = styled.img`
    width: 31.8px;
    height: 31.3px;
`
const Button = styled.button`
    border: none;
    outline: none;
    background: none;
    padding: 0;
    cursor: pointer;
    margin-right: 10.6px;
`


const AboutMe = props => (
    <Container>
        <div className="info">
            <Title>{props.about.title}</Title>
            <Introduction>{props.about.greeting} <br/>{props.about.introduction}</Introduction>
            <Description>{props.about.description}</Description>
            <Social>
                <Button><SocialIcon src={FacebookIcon}/></Button>
                <Button><SocialIcon src={InstagramIcon}/></Button>
                <Button><SocialIcon src={TwitterIcon}/></Button>
            </Social>
        </div>
    </Container>
)

AboutMe.propTypes = {
    about: PropTypes.object.isRequired,
}

export default AboutMe