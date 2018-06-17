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

class Example extends React.Component  {
    constructor() {
        super()
        this.state = {
            open: false
        }

        this.toggle = this.toggle.bind(this)
        this.close = this.close.bind(this)
    }

    toggle() {
        this.setState((prevState) => ({
            open: !prevState.open
        }))
    }

    close() {
        this.setState(() => ({
            open: false
        }))
    }

    render() {
        return (
            <Dropdown top={40} close={this.close} toggle={this.toggle} open={this.state.open}>
                <Button>Dropdown Menu</Button>
                <p>first</p>
                <p>secod</p>
                <p onClick={this.close}>Click me to close</p>
            </Dropdown>
        )
    }
}

export default Example