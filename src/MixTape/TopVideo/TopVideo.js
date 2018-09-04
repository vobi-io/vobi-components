import React from 'react'
import styled from 'styled-components'
// import { } from '../../../assets/svg/BookingGenius/Twitter.svg'
import EyeIcon from '../../../assets/svg/MixTape/eye.svg'
import CommentsIcon from '../../../assets/svg/MixTape/comments.svg'

const TopVideo = styled.div`
    flex:0 0 115px;
    max-width:450px;
    display:flex;
    font-size:16px;
    color:#8c8b8b;
    padding:20px 0;
    border-bottom:1px solid #ccc;
    min-height: 115px;
`

const Video = styled.div`
    flex:1;
    box-sizing:border-box;
    background-image:url(${props => props.src});
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
`

const VideoDesc = styled.div`
    flex:1.5;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    margin-left:10px;
    padding:5px 0;
`

const VideoDescTop = styled.div`
    display:flex;
    flex-direction:column;
`

const VideoDescTitle = styled.div`
    display:flex;
    justify-content:space-between;
`

const VideoDescSongName = styled.div`
    display:flex;
    color:#111;
    font-weight:800;
`

const VideoDescDuration = styled.div`
    display:flex;
`

const VideoDescArtist = styled.div`
    display:flex;
`

const VideoDescBottom = styled.div`

`

const VideoDescView = styled.div`
  color:#302d2d;
  display:flex;
  align-items:center;
`

const VideoDescComments = styled.div`
  color:#b4b4b4;
  display:flex;
  align-items:center;
`

const Icon = styled.div`
  width:15px;
  height:15px;
  background-image:url(${porps => porps.src});
  background-size:cover;
  background-position:center center;
  margin-right:5px;
`

export default ({ data }) =>
  (
    <TopVideo>
      <Video src={data.img} />
      <VideoDesc>
        <VideoDescTop>
          <VideoDescTitle>
            <VideoDescSongName>
              {data.songName}
            </VideoDescSongName>
            <VideoDescDuration>
              {data.duration}
            </VideoDescDuration>
          </VideoDescTitle>
          <VideoDescArtist>
            {data.songAuthor}
          </VideoDescArtist>
        </VideoDescTop>
        <VideoDescBottom>
          <VideoDescView>
            <Icon src={CommentsIcon} />
            {data.comments} Views
          </VideoDescView>
          <VideoDescComments>
            <Icon src={EyeIcon} />
            {data.views} Comments
          </VideoDescComments>
        </VideoDescBottom>
      </VideoDesc>
    </TopVideo>
  )

