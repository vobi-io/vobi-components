import React from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
    width:100%;
    display:flex;
    border-bottom:2px solid #F5F5F5;
`

const FilterItem = styled.div`
    flex:1;
    text-align:center;
    color:111;
    font-size:26px;
    padding:20px;
    box-sizing:border-box;
    font-weight:800;
    cursor:pointer;
    transition:0.3s;
    &:hover{
        color:#FF9600;
    }
`

export default () =>
  (
    <FilterContainer>
      <FilterItem>
        Trending
      </FilterItem>
      <FilterItem>
        Latest
      </FilterItem>
      <FilterItem>
        MixTapes
      </FilterItem>
      <FilterItem>
        Singles
      </FilterItem>
      <FilterItem>
        Videos
      </FilterItem>
    </FilterContainer>
  )

