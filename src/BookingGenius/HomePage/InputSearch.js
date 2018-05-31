import React from 'react'

import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    position: absolute;
    margin-top: -30px;
    width: 49.3%;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
`
const Input = styled.input`
    width: 79.6%;
    padding-left: 16px;
    border: none;
    outline: none;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.08);
    &::placeholder{
        color: #b3b3b3;
        font-size: 16px;
    }
`
const Button = styled.button`
    width: 20.4%;
    border: none;
    background-color: #07730d;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
`
const InputSearch = () => (
    <Container>
        <Input placeholder="Search talent"/>
        <Button>Search</Button>
    </Container>
)

export default InputSearch