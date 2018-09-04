import React from 'react'
import styled from 'styled-components'

import Header from '../Header'
import NewsSlider from './NewsSlider'
import NewsFilter from './NewsFilter'
import Post from '../Post'
import Subscribe from '../Subscribe'
import TopVideoPosts from "./TopVideoPosts";
import Footer from '../Footer'


const NewsContainer = styled.div`
    width:70%;
    display:flex;
    margin:auto;
    flex-direction:column;
`

const PostsContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    margin-top:20px;
`

export default ({
  PostsFirstPart, PostsSecondPart, TopMusicPosts, TopVideosData,
}) =>
  (
    <NewsContainer>
      <Header />
      <NewsSlider />
      <NewsFilter />
      <PostsContainer>
        {PostsFirstPart.map(item => <Post data={item} />)}
        <Subscribe />
        <TopVideoPosts
          TopMusicPosts={TopMusicPosts}
          TopVideosData={TopVideosData}
        />
        {PostsSecondPart.map(item => <Post data={item} />)}
      </PostsContainer>
      <Footer />
    </NewsContainer>
  )

