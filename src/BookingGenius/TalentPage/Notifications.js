import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DeleteIcon from './DeleteIcon'

const Container = styled.div`
    width: 895px;
    display: flex;
    flex-direction: column;
    margin-top: 34px;
    
`
const Table = styled.div`
    border: solid 1px #dbdbdb;
    background-color: #ffffff;
`
const TableContent = styled.div`
    height: 20px;
    padding-bottom: 29px;
    margin: 29px 24px 1px 23px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffffff;
    border-bottom: solid 1px #dbdbdb;
    &:last-child{
        border-bottom: none;
    }
`
const NotificationHeader = styled.span`
    font-family: Raleway;
    font-size: 20px;
    font-weight: bold;
    color: #555555;
    margin-bottom: 18px;
`
const Text = styled.span`
    color: #303030;
    font-size: 16px;
    font-weight: 600;
    .color{
        color: #06c953;
    }
`
const Type = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #06c953
`
const Date = styled.div`
    display: flex;
    align-items: center;
`
const DateText = styled.span`
    padding-right: 24px;
    opacity: 0.64;
    font-size: 14px;
    text-align: right;
    color: #515151;
`
const Button = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
`

const Notifications = props => (
    <Container>
        <NotificationHeader>Notifications</NotificationHeader>
        <Table>
            {props.notifications.map((item, index)=>(
                <TableContent key={index}>
                    <Text>
                        <span className="color">{item.subscription}</span>
                        {item.text}
                        <span className="color">{item.message}</span>
                        .
                    </Text>
                    <Date>
                        <DateText>{item.date}</DateText>
                        <Button>
                            <DeleteIcon />
                        </Button>
                    </Date>
                </TableContent>
            ))}
        </Table>
    </Container>
)

Notifications.propTypes = {
    notifications: PropTypes.array.isRequired,
}

export default Notifications