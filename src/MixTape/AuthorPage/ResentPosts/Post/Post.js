import React from 'react'
import styled from 'styled-components'


const PostContainer = styled.div`
    flex:1 0 350px;
    margin:10px;
    display:flex;
    flex-direction:column;
`

const PostContentTop = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`

const PostImg = styled.div`
    background-image:url(${props => props.src});
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
    width:100%;
    height:300px;
`

const PostContent = styled.div`
    background:#EFEFEF;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex:1;
    justify-content:space-between;
`

const PostTitle = styled.h2`

`
const PostDesc = styled.h2`
    font-size:12px;
    width:80%;
    text-align:justify;
    color:#888787;
`

const PostBottom = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Author = styled.div`
    color:#111;
    font-weight:800;
`
const AuthorFullName = styled.span`
    margin-left:3px;
    color:#f59138
`

const PostInfo = styled.div`
    width:80%;
    display:flex;
    justify-content:space-between;
    margin:10px 0;
`

const PostInfoItem = styled.span`
    color:#888787;
    font-weight:600;
`





export default (props) => {
    const { CreationDate, author, comments, PostDescription, img, shares, title } = props.data
    return (
        <PostContainer>
            <PostImg src={img}>
            </PostImg>

            <PostContent>
                <PostContentTop>
                    <PostTitle>
                        {title}
                    </PostTitle>
                    <PostDesc>
                        {PostDescription}
                    </PostDesc>
                </PostContentTop>
                <PostBottom>
                    <Author>
                        By
                    <AuthorFullName>
                            {author}
                        </AuthorFullName>
                    </Author>

                    <PostInfo>
                        <PostInfoItem>Posted {CreationDate} Day Ago </PostInfoItem>
                        <PostInfoItem>{comments} Comments</PostInfoItem>
                        <PostInfoItem>{shares} Shares</PostInfoItem>
                    </PostInfo>
                </PostBottom>
            </PostContent>

        </PostContainer>
    )
}
