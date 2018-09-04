import React from 'react'
import styled from 'styled-components'

import Header from '../Header'
import ProfileInfo from './ProfileInfo'
import ResentPosts from './ResentPosts'
import Footer from '../Footer'

const AuthorPageContainer = styled.div`
    width:70%;
    margin:auto;
    display:flex;
    flex-direction:column;
    @media only screen and (max-width: 1024px){
        width:80%;
    }
`

const LineSeparator = styled.div`
    width:100%;
    margin-top:30px;
    height:1px;
    background:#e0e0e0;
`

export default ({ AuthorData, PostsFirstPart, PostsSecondPart }) => {
  return (
    <AuthorPageContainer>
      <Header />
      <ProfileInfo data={AuthorData} />
      <LineSeparator />
      <ResentPosts
        PostsFirstPart={PostsFirstPart}
        PostsSecondPart={PostsSecondPart}
      />
      <Footer />
    </AuthorPageContainer>
  )
}
