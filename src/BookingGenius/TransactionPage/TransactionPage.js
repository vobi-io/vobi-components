import React from 'react'
import styled from 'styled-components'

import ArrowDown from '../../../assets/svg/BookingGenius/ArrowDown.svg'
import ArrowUp from '../../../assets/svg/BookingGenius/ArrowUp.svg'
import Calendar from '../../../assets/svg/BookingGenius/Calendar.svg'
import DropDown from '../../../assets/svg/BookingGenius/DropDown.svg'

import { NavBar } from '../..'
import { NumberedCard } from '../'
import Tables from './Table'

const Div = styled.div`
    width: 100%;
`

const Header = styled.div`
    width: 100%;
`

const Container = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    min-height: 900px;
`
const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    line-height: 37px;
    color: #303030;
    margin-top: 48px;
`
const BalanceRow = styled.div`
    margin-top: 19px;
    display: flex;
    >.numberCard{
        margin-right: 26px;
        @media only screen and (max-width: 870px){
            margin-top: 20px;
        }
    }
    @media only screen and (max-width: 870px){
        flex-wrap: wrap
    }
`
const FilterRow = styled.div`
    display: flex;
    margin-top: 39px;
    justify-content: space-between;
    @media only screen and (max-width: 870px){
        flex-direction: column;
    }
`
const Date = styled.div`
    border: 1px solid #C1C1C1;
    border-radius: 4px;
    background-color: #FFFFFF;
    display: flex;
    height: 40px;
    align-items: center;
    width: 254px;
    margin-right: 26px;
`
const Icon = styled.img`
    margin-left: 13px;
    height: 16px;
    width: 16px;

`
const Span = styled.span`
    color: #1F1E1E;
    font-size: 16px;
    line-height: 20px;
    margin-left: 9px;
`

const Filter = styled.div`
    border: 1px solid #C1C1C1;
    border-radius: 4px;
    display: flex;
    background-color: #FFFFFF;
    width: 170px;
    justify-content: space-between;
    align-items: center;
    margin-right: 14px;
    &:last-child{
        margin-right: 0px;
    }
`
const FlexDiv = styled.div`
    display: flex;
    @media only screen and (max-width: 500px){
        flex-direction: column;
    }
`
const Button = styled.button`
    outline: none;
    border: none;
    background-color: #06C953;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    height: 46px;
    width: 187px;
    border-radius: 4px;
    cursor: pointer;
    @media only screen and (max-width: 870px){
        margin-top: 20px;
    }
`

const IconBtn = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
    padding: 0;
    margin-right: 10px;
`
const TransactionPage = () => (
    <Div>
        <Header>
            <NavBar
                brandName="BookingGenius"
                leftPages={[]}
                rightPages={[{
                    title: 'About',
                    href: '#',
                }, {
                    title: 'Service',
                    href: '#',
                }, {
                    title: 'Requests',
                    href: '#',
                }, {
                    title: 'Browse',
                    href: '#',
                }, {
                    title: 'Dashboard',
                    href: '#',
                }, {
                    title: 'FAQ',
                    href: '#',
                }, {
                    title: 'Help',
                    href: '#',
                }]}
                user={user}
            />
        </Header>
        <Container>
            <Title>Transactions</Title>
            <BalanceRow>
                <div className="numberCard">
                    <NumberedCard
                        text={ 'Balance'}
                        amount={ '$1250' }
                    />
                </div>
                <div className="numberCard">
                    <NumberedCard
                        text={ 'Earnings due'}
                        amount={ '$1250' }
                        img={ArrowUp}
                    />
                </div>
                <div className="numberCard">
                    <NumberedCard
                        text={ 'Earnings paid'}
                        amount={ '$1250' }
                        img={ArrowDown}
                    />
                </div>
            </BalanceRow>
            <FilterRow>
                <FlexDiv>
                    <Date>
                        <Icon src={Calendar}/>
                        <Span>Feb 10, 2018 - Mar 10, 2018</Span>
                    </Date>
                    <Filter>
                        <Span>All Transaction</Span>
                        <IconBtn>
                            <Icon src={DropDown}/>
                        </IconBtn>
                    </Filter>
                    <Filter>
                        <Span>All Talents</Span>
                        <IconBtn>
                            <Icon src={DropDown}/>
                        </IconBtn>
                    </Filter>
                </FlexDiv>
                <Button>Add payout method</Button>
            </FilterRow>
            <Tables tableContent={tableContent}/>
        </Container>
    </Div>
)


const user = {
    avatar: 'https://avatars2.githubusercontent.com/u/2933601?s=460&v=4',
}
const tableContent = [
    {
        date: '12 Feb 2018 4:00 PM',
        type: 'Debit',
        description: 'Party in New York, 5th Avenue, 30 Jan 2018',
        talent: 'Bugle Shaggy',
        amount: '$510.00',
        balance: '510.00',
        id: '08739102187',
    },
    {
        date: '20 Feb 2018 4:00 PM',
        type: 'Credit',
        description: 'Party in Orlando, FL, 10 Feb 2018',
        talent: 'Bugle Shaggy',
        amount: '$1035.00',
        balance: 'Pending',
        id: '08739103412',
    },
]


export default TransactionPage