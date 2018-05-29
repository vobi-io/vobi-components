import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FavoriteDiv = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  svg {
    fill: ${props => (props.favorited ? '#06C953' : '#BEC0C6')};
  }
`

const Favorite = props => (
  <FavoriteDiv {...props}>
    <svg
      width="14px"
      height="14px"
      viewBox="0 0 14 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Sketch.</desc>
      <defs />
      <g id="Screens" stroke="none" strokeWidth="1" fillRule="evenodd">
        <g id="Category-B" transform="translate(-649.000000, -324.000000)" fillRule="nonzero">
          <g id="Group-3-Copy" transform="translate(644.000000, 318.000000)">
            <g id="favorite-heart-button" transform="translate(5.000000, 6.000000)">
              <path
                d="M7,13.1764706 L6.02,12.173913 C2.38,8.8797954 0,6.65984655 0,3.93861893 C0,1.71867008 1.68,0 3.85,0 C5.04,0 6.23,0.572890026 7,1.50383632 C7.77,0.572890026 8.96,0 10.15,0 C12.32,0 14,1.71867008 14,3.93861893 C14,6.65984655 11.62,8.8797954 7.98,12.173913 L7,13.1764706 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </FavoriteDiv>
)

Favorite.propTypes = {
  favorited: PropTypes.bool.isRequired,
}

export default Favorite
