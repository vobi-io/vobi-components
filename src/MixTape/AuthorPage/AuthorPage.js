import React from 'react'
import styled from 'styled-components'

import Header from "../Header";
import ProfileInfo from "./ProfileInfo";
import ResentPosts from './ResentPosts';

const AuthorPageContainer = styled.div`
    width:1240px;
    margin:auto;
    display:flex;
    flex-direction:column;
`

const LineSeparator = styled.div`
    width:100%;
    margin-top:30px;
    height:1px;
    background:#e0e0e0;
`


export default (props) => {
    const { profile, posts } = props.data
    return (
        <AuthorPageContainer>
            <Header />
            <ProfileInfo data={profile} />
            <LineSeparator></LineSeparator>
            <ResentPosts data={posts}>
            </ResentPosts>
        </AuthorPageContainer>
    )
}
