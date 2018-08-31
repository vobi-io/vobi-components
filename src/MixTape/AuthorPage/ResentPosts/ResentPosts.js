import React from 'react'
import styled from 'styled-components'
import Post from "./Post";
import { array } from '@storybook/addon-knobs/dist/base';


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
const RandomComponent = styled.div`
    width:100%;
    height:100px;
    background:tomato;
`

export default (props) => {

    // const render = []
    // props.data.map((item, index) => {
    //     // return index === 8 ? <Post data={item} /> : <div> <Post data={item} /> props.children </div>
    //     if (index === 8) {
    //         render.push(<RandomComponent />)
    //     }
    //     render.push(<Post data={item} />)
    // })
    let render = [];
    return (
        <ResentPostsContainer>
            <PostsTitle>
                <PostsTitleTxt>
                    Resent Posts
                </PostsTitleTxt>
            </PostsTitle>
            <PostsContainer>
                {
                    props.data.map((item, index, self) => {
                        if (index === 9) {
                            render.push(<RandomComponent />)
                        }
                        else if (index === self.length) {
                            render.push(<RandomComponent />)
                        }
                        render.push(<Post data={item} />)
                    })
                }
                {render}

            </PostsContainer>
        </ResentPostsContainer>
    )
}
