/* eslint react/prop-types:0 */

import React, { PropTypes } from 'react'
import './Button.scss'

const Button = props => (
  <button>
    {props.children}
    </button>
)

Button.defaultProps = {
}

Button.PropTypes = {

}

export default Button
