import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

function getWidthString(span) {
    if(!span) return;

    let width = span / 12 * 100;
    return `width: ${width}%`;
}



const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;

`

const Column = styled.div`
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

    @media only screen and (min-width: 300){
        ${({ sm }) => sm && getWidthString(sm)};
        styled.(Title)
    }

    @media only screen and (min-width: 992px){
        ${({ md })=> md && getWidthString(md)};
    }

    @media only screen and (min-width: 1200px){
        ${({ lg })=> lg && getWidthString(lg)};
    }

    @media only screen and (min-width: 1700px){
        ${({ xlg })=> xlg && getWidthString(xlg)};
    }
    &.cont{
        margin-left: auto;
        margin-right: auto;
        margin-top: 4.31%;
    }

`

const Title = styled.span`
    color: #303030;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    @media only screen and (max-width: 500px){
        font-size: 20px;
    }

    .number{
        color: #119D49;
        line-height: 40px;
        font-weight: 500;
        margin-left: 10px;
    }
`

const Wrapper = styled.div`
    background-color: ${props => {
        if(props.title === "Past Bookings"){
            return `#EAEAEA`
        }else{
            return `#ffffff`
        }
    }};
    width: 100%;
    margin-top: 1.3%;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.17);
    padding-top: 32px;
    padding-bottom: 28px;
`
const Table = styled.table`
    width: 96%;
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
`
const Th = styled.th`
    color: #A6A7B1;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    padding-bottom: 14px;
        
    @media only screen and (max-width: 500px){
        font-size: 10px;
    }
    &.client{
        width: 230.5px;
        text-align: left;
    }
    &.dates{
        text-align: center;
        width: 343px;
    }
    &.status{
        width: 133px;
        text-align: center;
    }
    &.total{
        width: 123px;
        text-align: left;
    }
    &.messages{
        width: 112px;
        text-align: center;
    }
    &.actions{
        width: 57px;
        text-align: right;
    }
`
const Td = styled.td`
    padding-top: 14px;
    padding-bottom: 14px;
    color: #302F31;
    font-size: 16px;
    line-height: 20px;
    &.centerMessages{
        color: #0A9A43;
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        text-align: center;
        @media only screen and (max-width: 650px){
            font-size: 10px;
        }
    }
    &.centerStatus{
        color: ${ props => {
            if(props.status === "ACTIVE"){
                return `#0B9519`
            }else if (props.status === "Upcoming"){
                return `#0688BD`
            }else{
                return `#6F6F6F`
            }
        }};
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        line-height: 20px;
        @media only screen and (max-width: 650px){
            font-size: 10px;
        }
    }
    &.paid{
        color: #302F31;
        font-size: 16px;
        line-height: 20px;
        @media only screen and (max-width: 650px){
            font-size: 10px;
        }
    }
    &.iconTd{
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
        height: 40px;
    }
`
const Tr = styled.tr`
    border-bottom: 1px solid #D8D8D8;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const FlexDiv = styled.div`
    display: flex;
    align-items: center;
`
const Name = styled.span`
    margin-left: 13px;
    color: #0A9A43;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    @media only screen and (max-width: 650px){
        font-size: 10px;
    }
`

const Dates = styled.div`
    display: flex;
    flex-flow: column wrap;
    .name{
        color: #0A9A43;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        @media only screen and (max-width: 650px){
            font-size: 10px;
        }
    }
    .date{
        color: #302F31;
        font-size: 16px;
        line-height: 20px;
        @media only screen and (max-width: 650px){
            font-size: 10px;
        }
    }
`
const Icon = styled.div`
    width: 36px;
    height: 34px;
    border: 1px solid #D4D5DC;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .dot{
        height: 4px;
        width: 4px;
        border-radius: 50%;
        background-color: #0A9A43;
        margin-left: 1px;
        margin-right: 1px;
    }
`

const BookingTable = props => (
    <Row>
        <Column lg="8.6" md="10" xlg="10" sm="10" className="cont">
            <Title>{props.booking.title}<span className="number">{props.booking.numberOf}</span></Title>
            <Wrapper title = {props.booking.title}>
                <Table>
                    <tbody>
                        <Tr>
                            <Th className="client">CLIENT</Th>
                            <Th className="dates">DATES</Th>
                            <Th className="status">STATUS</Th>
                            <Th className="total">PAID/TOTAL</Th>
                            <Th className="messages">MESSAGES</Th>
                            <Th className="actions">ACTIONS</Th>
                        </Tr>
                        {props.bookingContent.map((item, index) => (
                            <Tr key={index}>
                                <Td>
                                    <FlexDiv>
                                        <Avatar src={item.avatar}/>
                                        <Name>{item.name}</Name>
                                    </FlexDiv>
                                </Td>
                                <Td>
                                    <Dates>
                                        <span className="name">{item.dateKind}</span>
                                        <span className="date">{item.date}</span>
                                    </Dates>
                                </Td>
                                <Td className="centerStatus" status = {item.status}>
                                    <span>{item.status}</span>
                                </Td>
                                <Td className="paid">
                                    {item.paid}
                                </Td>
                                <Td className="centerMessages">{item.messages}</Td>
                                <Td className="iconTd">
                                    <Icon>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </Icon>
                                </Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            </Wrapper>
        </Column>
    </Row>
)



BookingTable.propTypes = {
    booking: PropTypes.object,
    bookingContent: PropTypes.array,
}
export default BookingTable