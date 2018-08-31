import React from 'react'
import styled from 'styled-components'
import Post from "./Post";


const ResentPostsContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`

const PostsHeader = styled.div`
    width:100%;
    text-align:center;
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
    justify-content:space-between;
`


export default (props) => {
    return (
        <ResentPostsContainer>
            <PostsTitle>
                <PostsTitleTxt>
                    Resent Posts
                </PostsTitleTxt>
            </PostsTitle>
            <PostsContainer>
                {
                    props.data.map((item, index) => {
                        return <Post data={item} />
                    })
                }
            </PostsContainer>
        </ResentPostsContainer>
    )
}
