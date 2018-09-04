import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Header from '../Header'
import BlogPost from '../BlogPost'
import YouTubeVideo from '../YouTubeVideo'
import TrendingItem from '../TrendingItem'
import Footer from '../Footer'
import Advertisement from '../Advertisement'

import backgroundImage from '../../../assets/svg/MixTape/background.png'


const Heading = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`
const TitleContainer = styled.div`
  width: 76%;
  text-align: center;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
`
const BlogTitle = styled.span`
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000000;
`
const BlogSubTitle = styled.span`
  font-size: 27px;
  letter-spacing: 1px;
  color: #666666;
`
const BackgroundPicture = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 60px 0;
`
const VideoContainer = styled.div`
  width: 78%;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 60px;
`
const TagsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
`
const Tag = styled.button`
  border: 1px solid #C9C9C9;
  color: #666666;
  padding: 3px 10px;
  background: transparent;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  color: #C9C9C9;
  :not(:last-child) {
    margin-right: 20px;
  }
`
const AlsoLikeHeaderContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  height: 100px;
  border-top: 1px solid #C9C9C9;
  border-bottom: 1px solid #C9C9C9;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  color: #000000;
`
const MayLikeContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
`
const StyledTrendingItem = styled.div`
  margin-bottom: 60px;
`

const BlogPostPage = ({ blogPageData }) => (
  <div>
    <Header bottomBorder />
    <Heading>
      <TitleContainer>
        <BlogTitle>AJ Tracey Drops A New Visual For Mimi</BlogTitle>
        <BlogSubTitle>AJ also talks about his upcoming album and tour</BlogSubTitle>
      </TitleContainer>
    </Heading>
    <BackgroundPicture />
    <BlogPost data={blogPageData.blogPostData} />
    <VideoContainer>
      <YouTubeVideo url={blogPageData.video} />
    </VideoContainer>
    <TagsContainer>
      {blogPageData.tags.map(item => (
        <Tag>{item}</Tag>
      ))}
    </TagsContainer>
    <AlsoLikeHeaderContainer>
      <span>You May also like</span>
    </AlsoLikeHeaderContainer>
    <MayLikeContainer>
      <Advertisement />
      {blogPageData.mayLike.map(item => (
        <StyledTrendingItem>
          <TrendingItem data={item} height />
        </StyledTrendingItem>
      ))}
    </MayLikeContainer>
    <Footer />
  </div>
)

BlogPostPage.propTypes = {
  blogPageData: PropTypes.object.isRequired,
}

export default BlogPostPage
