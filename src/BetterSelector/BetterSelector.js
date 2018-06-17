import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'


class BetterSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.selectedOption) {
      this.setState({ selectedOption: nextProps.value })
    }
  }
  handleChange(selectedOption) {
    this.setState({ selectedOption })
    if (this.props.onChange) {
      this.props.onChange(selectedOption)
    }
  }

  render() {
    const { selectedOption } = this.state

    return (
      <Select
        name={this.props.name}
        multi={this.props.multi}
        value={selectedOption}
        onChange={this.handleChange}
        options={this.props.options}
        arrowRenderer={this.props.arrowRenderer}
        searchable={this.props.searchable}
        clearable={this.props.clearable}
        menuContainerStyle={this.props.menuContainerStyle}
        menuStyle={this.props.menuStyle}
        style={this.props.style}
        wrapperStyle={this.props.wrapperStyle}
        placeholder={this.props.placeholder}
      />
    )
  }
}


BetterSelector.propTypes = {
  onChange: PropTypes.func,// eslint-disable-line
  value: PropTypes.any,// eslint-disable-line
  multi: PropTypes.bool,// eslint-disable-line
  options: PropTypes.array,// eslint-disable-line
  name: PropTypes.string,// eslint-disable-line
  arrowRenderer: PropTypes.func,// eslint-disable-line
  searchable: PropTypes.bool,// eslint-disable-line
  clearable: PropTypes.bool,// eslint-disable-line
  menuContainerStyle: PropTypes.object,// eslint-disable-line
  menuStyle: PropTypes.object,// eslint-disable-line
  style: PropTypes.object,// eslint-disable-line
  wrapperStyle: PropTypes.object,// eslint-disable-line
  placeholder: PropTypes.string,// eslint-disable-line
}

export default BetterSelector
