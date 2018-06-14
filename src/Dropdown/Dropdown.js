import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'


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
            <Wrapper innerRef={e => this.wrapperRef = e} >
                {this.props.children}
            </Wrapper>
        )
    }
}


Dropdown.propTypes={
}

Dropdown.defaultProps = {
}

export default Dropdown