import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InstructionsContent from './InstructionsContent'
import ArrowIcon from './ArrowIcon'

const Container = styled.div`
    width: 1028px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 122px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const Title = styled.div`
    width: 307px;
    font-size: 42px;
    font-weight: bold;
    line-height: 0.76;
    color: #2f3033;
`
const Wrapper = styled.div`
    margin-top: 57.3px;
    display: flex;
    align-items: baseline;
`

const WorkingInstructions = props => (
    <Container>
        <Title><span>How it works</span></Title>
        <Wrapper>
            <InstructionsContent 
                img = {"browse"} 
                instructionsContent={props.workingInstructionsContent.instructionsContentBrowse}
            />
            <ArrowIcon />
            <InstructionsContent 
                img = {"security"} 
                instructionsContent={props.workingInstructionsContent.instructionsContentSecurity}
            />
            <ArrowIcon />
            <InstructionsContent 
                img = {"event"} 
                instructionsContent={props.workingInstructionsContent.instructionsContentEvent}
            />
        </Wrapper>
    </Container>
)


WorkingInstructions.propTypes ={
    workingInstructionsContent: PropTypes.object.isRequired,
}


export default WorkingInstructions