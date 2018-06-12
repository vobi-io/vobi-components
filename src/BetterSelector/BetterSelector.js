import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Select from 'react-select';


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

class BetterSelector extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedOption: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(selectedOption) {
      this.setState({ selectedOption });
          
    }
    render() {
        const { selectedOption } = this.state;
  
      return (
          <div>
            <Title>{this.props.selectType.title}</Title>
            <StyledSelect
                width={this.props.selectType.width}
                name="form-field-name"
                isMulti={this.props.selectType.multi}
                value={selectedOption}
                onChange={this.handleChange}
                placeholder={this.props.selectType.placeholder}
                clearable={false}
                options = {this.props.options}
            />
        </div>
      );
    }
}

BetterSelector.propTypes={
    selectType: PropTypes.object,
    options: PropTypes.array,
}

BetterSelector.defaultProps = {
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

