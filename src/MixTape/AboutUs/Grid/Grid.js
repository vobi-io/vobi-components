import React from 'react'
import styled from 'styled-components'
// import DotsIcon from '../../../../assets/svg/MixTape/ellipsis.svg'

const GridContainer = styled.div`
    width: 1024px;
    height:250px;
    padding:20px 0;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const GridTitle = styled.div`
    color:#111;
    width:65%;
    text-align:center;
    font-size:34px;
    font-weight:600;
`

const GridItems = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    margin-top:20px;
`

const GridItem = styled.div`
    height:200px;
    flex:1 0 150px;
    margin:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const GridItemIcon = styled.div`
    width: 150px;
    height: 150px;
    border:2px solid #111;
    border-radius:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Icon = styled.div`
    width:80px;
    height:80px;
    background-image: url(${props => props.src});
    background-position:center center;
    background-repeat:no-repeat;
`

const GridItemTxt = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    box-sizing:border-box;
    font-size:22px;
    margin-top:20px;
`

const GridItemtitle = styled.span`
    font-weight:bold;
    text-align:center;
`

const GridItemHelper = styled.span`
    color:#DFDFDF;
    text-align:center;
`

export default (props) => {
  const { data } = props
  return (
    <GridContainer>
      <GridTitle>
        Why Join Mixtape Madness
      </GridTitle>
      <GridItems>
        {
          data.map(item => (
            <GridItem>
              <GridItemIcon>
                <Icon src={item.icon} />
              </GridItemIcon>
              <GridItemTxt>
                <GridItemtitle>
                  {item.title}
                </GridItemtitle>
                <GridItemHelper>
                  {item.helperTxt}
                </GridItemHelper>
              </GridItemTxt>
            </GridItem>
          ))
        }
      </GridItems>
    </GridContainer>
  )
}
