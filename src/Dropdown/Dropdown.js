import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components'
import PropTypes from 'prop-types'

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
`;


const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    position: absolute;
    background: #fff;
    cursor: initial;
    top: 0;
    left: 0;
    border: 1px solid #E1E1E1;
    z-index: 100;
    box-sizing: border-box;
    display: none;
    animation: ${fadeDown} 0.3s ease-in;
    min-width: 100px;
    ${p => p.width && `min-width: ${p.width}px`};
    ${p => p.open && 'display: block'};
    ${p => p.left && `left: ${p.left}px`};
    ${p => p.right && `right: ${p.right}px`};
    ${p => p.top && `top: ${p.top}px`};
    ${p => p.bottom && `bottom: ${p.bottom}px`};
    user-select: none;
    ${props => props.shadow && 'box-shadow: 0 0 8px 0 rgba(0,0,0,0.13)'};

    ${props => props.arrow && css`
        &::after{
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            margin-left: 0;
            top: 1px;
            left: 272px;
            box-sizing: border-box;
            border: 6px solid black;
            border-color: transparent transparent #fff #fff;
            transform-origin: 0 0;
            transform: rotate(135deg);
            ${props => props.shadow && 'box-shadow: 0 0 6px 0px white, -3px 3px 5px 0px rgba(0,0,0,0.13)'};
        }
    `}
`;

class Dropdown extends React.Component {
    constructor() {
        super()
        
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    componentWillMount(){
        document.addEventListener('mousedown', this.handleClickOutside, true)
        document.addEventListener('touchend', this.handleClickOutside, true)
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown',this.handleClickOutside,true)
        document.removeEventListener('touchend', this.handleClickOutside, true)
    }

    handleClickOutside(e) {
        if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
            this.props.onClose()
        }
    }

    render() {
        if(!this.props.open) return null
        return (
            <Wrapper innerRef={e => this.wrapperRef = e} {...this.props}>
                {this.props.children}
            </Wrapper>
        )
    }
}


Dropdown.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

Dropdown.defaultProps = { 
    open: false
}

export default Dropdown