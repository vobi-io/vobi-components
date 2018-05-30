import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ArrowIcon from '../../assets/svg/Breadcrumb/arrow.svg'

const StyledWrapper = styled.div`
  display: flex;
`

const Step = styled.div``

const StepTitle = styled.span`
  font-size: 20px;
  color: ${props => (props.disabled ? '#b9b9b9' : '#303030')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`

const Icon = styled.img`
  margin: 0 20px;
`

const Breadcrumb = props => (
  <StyledWrapper>
    {props.steps.map((item, key) => (
      <Step key={item.title}>
        <StepTitle
          onClick={() => {
            if (!item.disabled) {
              item.onClick(item)
            }
          }}
          disabled={item.disabled}
        >
          {item.title}
        </StepTitle>
        {props.steps.length - 1 !== key && <Icon src={ArrowIcon} />}
      </Step>
    ))}
  </StyledWrapper>
)

Breadcrumb.propTypes = {
  steps: PropTypes.array.isRequired,
}

Breadcrumb.defaultProps = {}

export default Breadcrumb
