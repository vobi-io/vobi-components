import React from 'react'

import styled from 'styled-components'

const Btn = styled.button`
    width: 259px;
    height: 36px;
    border-radius: 6px;
    border: solid 1px #06c953;
    cursor: pointer;
    background: none;
    font-size: 16px;
    font-weight: bold;
    color: #06c953;
`

const Button = (props) => (
    <Btn>
        {props.display}
    </Btn>
)

export default Button