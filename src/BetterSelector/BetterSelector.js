import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Select, {components} from 'react-select'

import DropDown from '../../assets/svg/BookingGenius/DropDown.svg'



const StyledSelect = styled(Select)`
    width: ${props => props.width};
    span{
        background-color: transparent;
    }
`
const Title = styled.span`
    color: rgb(51, 51, 51);
    font-size: 16px;
    margin-bottom: 5px;
    margin-left: 2px;
`
const Img = styled.img`
    width: 12px;
    height: 12px;
`


class BetterSelector extends Component {

    render() {
        const DropdownIndicator = (props) => {
            return (
              <components.DropdownIndicator {...props}>
                <Img src={this.props.icon} />
              </components.DropdownIndicator>
            );
        };
  
      return (
        <StyledSelect
            width={this.props.selectType.width}
            name="form-field-name"
            isMulti={this.props.selectType.multi}
            value={this.props.value}
            onChange={this.props.onChange}
            placeholder={this.props.selectType.placeholder}
            clearable={false}
            options={this.props.options}
            components={{DropdownIndicator}}
            styles = {this.props.selectStyles}
        />
      );
    }
}




BetterSelector.propTypes={
    icon: PropTypes,
    selectType: PropTypes.object,
    selectStyles: PropTypes.object,
    options: PropTypes.array,
    onChange: PropTypes.func,
    value: PropTypes.any,
}

BetterSelector.defaultProps = {
    icon: DropDown,
    onChange: (e) => { return (console.log('Value has Changed')) },
    selectStyles: {
        control: styles => ({ ...styles, backgroundColor: '#ffffff', border: '1px solid rgb(193, 193, 193)', }),
        input: styles => ({...styles, padding: '9px'})
    },
    selectType: {
        multi: false,
        placeholder: 'choose',
        width: '618px',
        title: 'Choose your category',
    },
    options: [
        { value: 'artist', label: 'Artist' },
        { value: 'musician', label: 'Musician' },
        { value: 'comedians', label: 'Comedians' },
        { value: 'dj', label: 'DJ' },
        { value: 'actor', label: 'Actor' },
    ]
}

export default BetterSelector

