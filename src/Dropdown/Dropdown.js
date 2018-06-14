import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components'
import PropTypes from 'prop-types'

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const Parent = styled.div`
  position: relative;
  display: inline-block;
`

const Inline = styled.div`
  display: inline-block;
`

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
    display: inline-block;
    animation: ${fadeDown} 0.3s ease-in;
    min-width: 100px;
    ${p => p.width && `min-width: ${p.width}px`};
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
        document.addEventListener('mousedown', this.handleClickOutside, false)
        document.addEventListener('touchend', this.handleClickOutside, false)
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown',this.handleClickOutside,false)
        document.removeEventListener('touchend', this.handleClickOutside, false)
    }

    handleClickOutside(e) {
        if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
            this.props.close()
        }
    }



    render() {
        const Menu = this.props.children.slice(0,1)
        const Children = this.props.children.slice(1)
        return (
            <Parent innerRef={e => this.wrapperRef = e} >
                <Inline onClick={this.props.toggle}>{Menu}</Inline>
                {this.props.open && (
                    <Wrapper  {...this.props}>
                        {Children}
                    </Wrapper>
                )}
            </Parent>
        )
    }
}


Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired
}

export default Dropdown