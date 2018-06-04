import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'



const Div = styled.div`
    margin-top: 35px;
`

const Title = styled.span`
    color: #303030;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    .number{
        color: #119D49;
        line-height: 40px;
        font-weight: 500;
        margin-left: 10px;
    }
`

const Wrapper = styled.div`
    background-color: #ffffff;
    width: 100%;
    margin-top: 1.3%;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.17);
    padding-top: 32px;
    padding-bottom: ${props => props.content.length > 0 ? '25px' : '40px'};
`
const Table = styled.table`
    max-width: 949px;
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
`
const Th = styled.th`
    color: #A6A7B1;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    padding-bottom: 14px
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
    }
    &.centerStatus{
        color: #70A834;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        line-height: 20px;
    }
    &.paid{
        color: #302F31;
        font-size: 16px;
        line-height: 20px;
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
   
`

const Dates = styled.div`
    display: flex;
    flex-flow: column wrap;
    .name{
        color: #0A9A43;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
       
    }
    .date{
        color: #302F31;
        font-size: 16px;
        line-height: 20px;
        font-weight: bold;
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
    <Div>
        <Title>{props.tableTitle.title}<span className="number">{props.tableTitle.numberOf}</span></Title>
        <Wrapper content = {props.tableContent}>
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
                    {props.tableContent.map((item, index) => (
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
    </Div>
)



BookingTable.propTypes = {
    tableTitle: PropTypes.object,
    tableContent: PropTypes.array,
}
export default BookingTable