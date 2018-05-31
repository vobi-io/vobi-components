import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import Rating from '../../Rating/Rating'

const Container = styled.div`
    
    width: 1200px;
    margin-top: 44px;
    display: flex;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
`
const Button = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    outline: none;
`
const Wrapper = styled.div`
    width: 1080px;
    display: flex;
    flex-direction: column;
    margin-left: 39px;
    margin-right: 39px;
`
const TalentWrapper = styled.div`
    display: flex;
`
const Talent = styled.div`
    width: 350px;
    margin-right: 15px;
    &:last-child{
        margin-right: 0;
    }
`
const Title = styled.div`
    font-size: 22px;
    font-weight: bold;
    line-height: 3;
    color: #2f3033;
`
const ImageContainer = styled.div`
    height: 180px;
    width: 350px;
`
const Image = styled.img`
    height: 180px;
    width: 350px;
`
const Info = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    width: 330px;
    display: flex;
    justify-content: space-between;
`
const TalentInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 9px;
    .profession{
        font-size: 11px;
        font-weight: 800;
        line-height: 1.64;
        color: #6b6e75;
    }
    .name{
        font-size: 15px;
        font-weight: 600;
        line-height: 1.2;
        color: #2f3033;
    }
`
const TalentReview = styled.div`
    margin-top: 9px;
    display: flex;
    flex-direction: column;
    text-align: right;
    &> span{
        font-size: 14px;
        line-height: 1.29;
        color: #9396a0;
    }

`

const Talents = props =>(
    <Container>
        <Button><LeftArrow /></Button>
        <Wrapper>
            <Title><span>{props.title}</span></Title>
            <TalentWrapper>
                {props.talents.map((item,index) => (
                    <Talent key={index}>
                        <ImageContainer><Image src={item.avatar}/></ImageContainer>
                        <Info>
                            <TalentInfo>
                                <span className="profession">{item.profession}</span>
                                <span className="name">{item.name}</span>
                            </TalentInfo>
                            <TalentReview>
                                <Rating />
                                <span>{item.reviews}</span>
                                <span>reviews</span>
                            </TalentReview>
                        </Info>
                    </Talent>
                ))}
            </TalentWrapper>
        </Wrapper>
        <Button><RightArrow /></Button>
    </Container>
)

Talents.propTypes = {
    title: PropTypes.string.isRequired,
    talents: PropTypes.array.isRequired,
}

export default Talents