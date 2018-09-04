import React from 'react'
import styled from 'styled-components'
import Post from '../../Post'
import Subscribe from '../../Subscribe'


const ResentPostsContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`

const PostsTitle = styled.div`
    width:100%;
    text-align:center;
`

const PostsTitleTxt = styled.h1`
    font-size:36px;
`

const PostsContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`
const LoadMore = styled.div`
    width:100%;
    text-align:center;
    font-size:18px;
    font-weight:800;
    margin:20px 0;
    cursor:pointer;
`

const render = []
export default ({ PostsFirstPart, PostsSecondPart }) =>
  (
    <ResentPostsContainer>
      <PostsTitle>
        <PostsTitleTxt>
          Resent Posts
        </PostsTitleTxt>
      </PostsTitle>
      <PostsContainer>
        {
          PostsFirstPart && PostsFirstPart.map(item => <Post data={item} />)
        }
        <Subscribe />
        {
          PostsSecondPart && PostsSecondPart.map(item => <Post data={item} />)
        }


        <LoadMore >
          Load More +
        </LoadMore>
      </PostsContainer>

    </ResentPostsContainer>
  )

