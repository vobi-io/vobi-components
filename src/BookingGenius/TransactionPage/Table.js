import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'


const Title = styled.span`
    color: #303030;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
`
const Container = styled.div`
    margin-top: 20px;
    background-color: #FFFFFF;
    border-radius: 3px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.17);
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
    padding-top: 32px;
`
const Td = styled.td`
    padding-top: 28px;
    padding-bottom: 29px;
    color: #302F31;
    font-size: 16px;
    line-height: 20px;
    .name{
        color: #0A9A43;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
    }
`
const Tr = styled.tr`
    border-bottom: 1px solid #D8D8D8;
    &:last-child{
        border-bottom: none;
    }
    .date{
        text-align: left;
        width: 224px;
    }
    .type{
        text-align: center;
        width: 100px;
    }
    .description{
        text-align: left;
        width: 381px;
    }
    .talent{
        text-align: left;
        width: 139px;
    }
    .amount{
        width: 130px;
        text-align: right;
    }
    .id{
        width: 173px;
        text-align: right;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    .balance{
        color: #A6A7B1;
        font-size: 14px;
        line-height: 17px;
    }
`

const Tables = props => (
    <Container>
        <Table>
            <tbody>
                <Tr>
                    <Th className="date">DATE</Th>
                    <Th className="type">TYPE</Th>
                    <Th className="description">DESCRIPTION</Th>
                    <Th className="talent">TALENT</Th>
                    <Th className="amount">AMOUNT/BALANCE</Th>
                    <Th className="id">REF ID</Th>
                </Tr>
                {props.tableContent.map((item,index) => (
                    <Tr key={index}>
                        <Td className="date">{item.date}</Td>
                        <Td className="type">{item.type}</Td>
                        <Td className="description">{item.description}</Td>
                        <Td className="talent"><span className="name">{item.talent}</span></Td>
                        <Td className="amount">
                            <Div>
                                {item.amount}
                                <span className="balance">{item.balance}</span>
                            </Div>
                        </Td>
                        <Td className="id">{item.id}</Td>
                    </Tr>
                ))}
            </tbody>
        </Table>
    </Container>
)

Table.propTypes = {
    tableContent: PropTypes.array.isRequired,
}


export default Tables