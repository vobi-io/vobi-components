import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from './Button'

const Container = styled.div`
    margin-top: 14px;
    width: 307px;
    background-color: #ffffff;
    border: solid 1px #dbdbdb;
`
const Wrapper = styled.div`
    margin-top: 18px;
    display: flex;
    justify-content: space-around;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Span = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #a6a7b1;
`
const Cash = styled.span`
    font-size: 22px;
    font-weight: bold;
    color: #303030;
    margin-top: 10px;
`
const BtnContainer = styled.div`
    margin: 18px 25px 14px 23px;
`
const Financials = props => (
    <Container>
        <Wrapper>
            <Content>
                <Span>Balance</Span>
                <Cash>{props.financials.balance}</Cash>
            </Content>
            <Content>
                <Span>Earnings due</Span>
                <Cash>{props.financials.earningsDue}</Cash>
            </Content>
            <Content>
                <Span>Earnings paid</Span>
                <Cash>{props.financials.earningsPaid}</Cash>
            </Content>
        </Wrapper>
        <BtnContainer>
            <Button display={"View Financials"}/>
        </BtnContainer>
    </Container>
)

Financials.propTypes = {
    financials: PropTypes.object.isRequired,
}

export default Financials