import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import BrowseIcon from './BrowseIcon'
import SecurityIcon from './SecurityIcon'
import EventIcon from './EventIcon'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 269px;
    align-items: center;
    text-align: center;
`
const Title = styled.span`
    color: #2d3245;
    font-size: 18px;
    font-weight: 600;
`
const Desc = styled.span`
    color: #6d7783;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.29;
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 14.5px;
`
const InstructionsContent = props => {
   if(props.img === "browse"){
       return(
           <Container>
                <BrowseIcon/>
                <Div>
                    <Title>{props.instructionsContent.title}</Title>
                    <Desc>{props.instructionsContent.description}</Desc>
                </Div>
           </Container>
       )
   }else if(props.img ==="security"){
       return(
           <Container>
                <SecurityIcon />
                <Div>
                    <Title>{props.instructionsContent.title}</Title>
                    <Desc>{props.instructionsContent.description}</Desc>
                </Div>
           </Container>
       )
   }else{
       return(
           <Container>
                <EventIcon />
                <Div>
                    <Title>{props.instructionsContent.title}</Title>
                    <Desc>{props.instructionsContent.description}</Desc>
                </Div>
           </Container>
       )
   }
}


InstructionsContent.propTypes = {
    img: PropTypes.string.isRequired,
    instructionsContent: PropTypes.object.isRequired,
}

export default InstructionsContent