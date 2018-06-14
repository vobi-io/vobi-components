import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Dropdown } from '../../src'


const Parent = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 40%
`

const Button = styled.button`
    display: inline-fle;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    background-color: skyblue;
    color: #fff;
    border: 0;
`

class Example extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false
        }

        this.toggle = this.toggle.bind(this)
        this.onClose = this.onClose.bind(this)
    }

   toggle() {
       this.setState((prevState) => ({
            open: !prevState.open
       }))
   }

   onClose() {
       this.setState(() => ({
           open: false
       }))
   }

    render() {
        return (
            <Parent>
                <Button onClick={this.toggle} >DropDown Menu</Button>
                <Dropdown open={this.state.open} onClose={this.onClose} top={40}>
                    <p>first</p>
                    <p>second</p>
                    <p>third</p>
                </Dropdown>
            </Parent>
        )
    }
}



export default Example