import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
    width: 895px;
    display: flex;
    flex-direction: column;
    margin-top: 2.125em;
    
`
const Table = styled.div`
    border: solid 1px #dbdbdb;
    background-color: #ffffff;
`
const TableContent = styled.div`
    padding-bottom: 28px;
    margin: 29px 22px 1px 19px;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    border-bottom: solid 1px #dbdbdb;
    &:last-child{
        border-bottom: none;
    }
`
const FlexDiv = styled.div`
    display: flex;
    align-items: center;
`
const MessagesHeader = styled.span`
    font-family: Raleway;
    font-size: 20px;
    font-weight: bold;
    color: #555555;
    margin-bottom: 1.125em;
`
const Avatar = styled.img`
    width: 45.2px;
    height: 44.3px;
    border-radius: 50%;
`
const NameDate = styled.div`
    display: flex;
    flex-direction: column;
    width: 153px;
    padding-left: 10.8px;
    align-items: center;
    .name{
        font-size: 18px;
        font-weight: 600;
        color: #06c953;
    }
    .date{
        font-size: 16px;
        color: #302f31;
    }
`
const Text = styled.div`
    margin-left: 39px;
    font-size: 16px;
    color: #2f3033;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Messages = props => (
    <Container>
        <MessagesHeader>Messages</MessagesHeader>
        <Table>
            {props.messages.map((item,index)=> (
                <TableContent key={index}>
                    <FlexDiv>
                        <Avatar src={item.avatar}/>
                        <NameDate>
                            <span className="name">{item.name}</span>
                            <span className="date">{item.date}</span>
                        </NameDate>
                    </FlexDiv>
                    <Text>
                        <span>{item.message}</span>
                        <span>{item.message1}</span>
                    </Text>
                </TableContent>
            ))}
        </Table>
    </Container>
)

Messages.propTypes = {
    messages: PropTypes.array.isRequired,
}

export default Messages