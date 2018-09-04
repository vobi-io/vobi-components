import React, { Component } from 'react'
import styled from 'styled-components'

const Icon = styled.div`
    width: 36px;
    height: 34px;
    border: 1px solid #D4D5DC;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const Dot = styled.div`
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: #0A9A43;
    margin-left: 1px;
    margin-right: 1px;
`
const Actions = styled.div`
    display: ${props => props.open ? 'block' : 'none'}
    position: absolute;
    margin-top: 5px;
    margin-left: -60px;
    background-color: rgb(249, 249, 249);
    min-width: 160px;
    min-height: 100px;
    z-index: 5;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px 0px;
    text-align: center;
`
const ActionLinks = styled.span`
    font-size: 16px;
    height: 50px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    color: black;
    text-decoration: none;
    &:hover{
        background-color: rgb(242, 242, 242);
    }
`

class ActionComponent extends Component {
  constructor(props) {
    super()
    this.handeClick = this.handeClick.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.state = {
      dropDownOpen: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handeClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handeClick);
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handeClick(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.dropDownOpen) {
        this.setState({ dropDownOpen: false })
      }
    }
  }

  toggle() {
    this.setState({ dropDownOpen: !this.state.dropDownOpen })
  }

  render() {
    return (
      <div ref={this.setWrapperRef}>
        <Icon onClick={this.toggle}>
          <Dot />
          <Dot />
          <Dot />
        </Icon>
        <Actions open={this.state.dropDownOpen}>
          <ActionLinks>View Details</ActionLinks>
          <ActionLinks>Modify Terms</ActionLinks>
          <ActionLinks>Reject</ActionLinks>
          <ActionLinks>Send Message</ActionLinks>
        </Actions>
      </div>
    )
  }
}


export default ActionComponent