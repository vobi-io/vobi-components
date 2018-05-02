/* eslint react/prop-types:0 */

import React, { PropTypes } from 'react'
import './Button.scss'

const Button = props => (
  <button className="button" onClick={props.onClick}>
    {props.children}
  </button>
)

Button.defaultProps = {
}

Button.propTypes = {

}

export default Button
