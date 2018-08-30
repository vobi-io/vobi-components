import React from 'react'
import styled from 'styled-components'

const JoinNowBtnContainer = styled.div`
    background:transparent;
    color:#fff;
    font-size:26px;
    font-weight:bold;
    padding:10px 35px;
    border:2px solid #F7941D;
    border-radius:20px;
    cursor:pointer;
`

export default () => {
    return (
        <JoinNowBtnContainer>
            Join Now
        </JoinNowBtnContainer>
    )
}
