import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'



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
const ColumnNames = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1px 22px 1px 19px;
    padding: 28px 0px 23px 0px;
    border-bottom: solid 1px #dbdbdb;

    font-size: 14px;
    font-weight: 600;
    color: #a6a7b1;
    letter-spacing: -0.4px;
    .client{
        padding-right: 159px;
    }
    .date{
    padding-right: 313px;
    }
    .status{
        padding-right: 167px;
    }
    .paid{
    }

`
const TableContent = styled.div`
    margin: 1px 22px 1px 19px;
    padding: 28px 0px 23px 0px;
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
const BookingsHeader = styled.span`
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
const Name = styled.div`
    display: flex;
    width: 153px;
    padding-left: 12px;
    font-size: 18px;
    font-weight: 600;
    color: #06c953;
`
const Dates = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 347px;
    color: #302f31;
    font-size: 16px;
    .color{
        color: #06c953
    }
`
const Status = styled.div`
    width: 147px;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    align-items: center;
    color: #70a834;
`
const Price = styled.div`
    display: flex;
    word-break: break-all;
    width: 141px;
    align-items: center;
    font-size: 16px
    justify-content: flex-end;
    
`
const UpcomingBookings = props => (
    <Container>
        <BookingsHeader>Upcoming Bookings</BookingsHeader>
        <Table>
            <ColumnNames>
                <span className="client">CLIENTS</span>
                <span className="date">DATES</span>
                <span className="status">STATUS</span>
                <span className="paid">PAID/TOTAL</span>
            </ColumnNames>
            {props.upcomingbookings.map((item, index) => (
                <TableContent key={index}>
                    <FlexDiv>
                        <Avatar src={item.avatar}/>
                        <Name>
                            <span>{item.name}</span>
                        </Name>
                    </FlexDiv>
                    <Dates>
                        <span className="color">{item.dateName}</span>
                        <span>{item.date}</span>
                    </Dates>
                    <Status>
                        <span>{item.status}</span>
                    </Status>
                    <Price>
                        <span>{item.paid}</span>
                    </Price>
                </TableContent>
            ))}
        </Table>
    </Container>
)

UpcomingBookings.propTypes = {
    upcomingbookings: PropTypes.array.isRequired,
}

export default UpcomingBookings