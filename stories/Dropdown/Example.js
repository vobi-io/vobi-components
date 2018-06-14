import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Dropdown } from '../../src'



const Button = styled.button`
    display: inline-fle;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    background-color: skyblue;
    color: #fff;
    border: 0;
`

const Example = () => (
    <Dropdown top={40}>
        <Button>Dropdown Menu</Button>
            <p>first</p>
            <p>secod</p>
            <p>last</p>

    </Dropdown>
)



export default Example