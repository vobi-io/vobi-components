import React from 'react'
import styled from 'styled-components'

import { NavBar } from '../..'
import { VideoArea, LatestNews, VideoList, Reviews } from '../'
import AboutMe from './AboutMe'
import RecentEvents from './RecentEvents'
import Card from './Card'

const Container = styled.div`
    width: 100%;
    min-height: 2307px;
`
const Wrapper = styled.div`
    display: flex;
    margin-top: 24px;
    max-width: 1227px;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap-reverse;
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
`
const Aside = styled.div`
    display: flex;
    margin-left: 16px;
    margin-top: 97px;
    flex-direction: column;
    @media only screen and (max-width: 1250px){
        flex-direction: row;
        margin-bottom: 40px;
    }
`
const MarginTop = styled.div`
    max-width: 840px;
    margin-top: 40px;
`

const Terms = styled.div`
    width: 100%;
    background: #ffffff;
    width: 100%;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.11);
`
const TermsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0px 20px 24px;
    max-width: 693px;
    .title{
        font-size: 22px;
        font-weight: bold;
        line-height: 3;
        color: #2f3033;
    }
    .header{
        font-size: 18px;
        font-weight: bold;
        line-height: 1.33;
        color: #332f2f;
    }
    .description{
        margin-top: 16px;
        color: #332f2f;
        line-height: 1.43;
        font-size: 14px;
    }
    .readMore{
        font-weight: 600;
        color: #0076ff;
        cursor: pointer;
    }
`

const NewsContainer = styled.div`
    margin-top: 40px;
    @media only screen and (max-width: 1250px){
        margin-left: 81px;
    }
`

const UserPage = () => (
    <Container>
        <NavBar
            brandName="BookingGenius"
            leftPages={[]}
            rightPages={[{
                title: 'About',
                href: '#',
            },{
                title: 'Service',
                href: '#',
            },{
                title: 'Browse',
                href: '#',
            },{
                title: 'Dashboard',
                href: '#',
            },{
                title: 'FAQ',
                href: '#',
            },{
                title: 'Help',
                href: '#',
            }
            ]}
        />
        <Wrapper>
            <Main>
                <VideoArea imageUrl = {'https://img.youtube.com/vi/fKopy74weus/maxresdefault.jpg'}/>
                <AboutMe  about={about}/>
                <RecentEvents data={data} eventInfo={eventInfo}/>
                <MarginTop>
                    <VideoList
                        videoData={videoListDummyData}
                        title="VideoList"
                        numberOfItemsInLine={4}
                    />
                </MarginTop>
                <MarginTop>
                    <Reviews
                        rating={5}
                        reviews={reviews}
                    />
                </MarginTop>
                <MarginTop>
                    <Terms>
                        <TermsContainer>
                            <span className="title">Talent Booking Terms</span>
                            <span className="header">The Small Change That Creates Massive Results In Your Life</span>
                            <span className="description">Keeping one’s self going is a difficult thing to do. There are a million distractions that occur every day and that can mean that we do not stay on track with what we should be doing. Self-motivation is something that does not come easy to a lot of people and that means that there are some steps that need to be taken before you can become motivated to the fullest extent. 
                                <a className="readMore">Read more</a>
                            </span>
                        </TermsContainer>
                    </Terms>
                </MarginTop>
            </Main>
            <Aside>
                <Card talent={talent}/>
                <NewsContainer>
                    <LatestNews news={newsArray}/>
                </NewsContainer>
            </Aside>
        </Wrapper>
    </Container>
)


const reviews=[
    {
    title: 'Dedicated Desk - 5 Available at VOCAL, 625 Broadway Avenue, 3rd Floor, New York, NY, United States',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    createdAt: new Date(),
    },
    {
    title: 'Team Office for 35, 77 Bleecker Street, New York, NY, United States',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '16.04.2017',
    },
    {
    title: 'Dedicated Desk - 1 Available at The Farm SoHo,76 Wooster Street, New York, NY, United States',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    createdAt: new Date(),
    }
]

const data = {
    url: "https://www.youtube.com/watch?v=P2x3-b6JEj8",
    location: "Orlando, FL.",
    date: "20/08/2017",
}

const eventInfo = [
    {
        img: "https://i.imgur.com/5IXinO1.png",
        location: "Orlando, FL.",
        date: "20/08/2017",
    },
    {
        img: "https://i.imgur.com/5IXinO1.png",
        location: "Orlando, FL.",
        date: "20/08/2017",
    },
]

const about = {
    title: 'About Me',
    greeting: 'Hello',
    intruduction: "My name is Nick Johnson, I'm a singer from New York.",
    description: "During my career I have been responsible for user-centred experience & interface consistency of sites and applications for both web and mobile devices.I'm in love with making unique and fresh-looking design for easy-to-use products.",
}

const talent = {
    name: "Bugle Shaggy",
    avatar: "https://i.imgur.com/yAE1AIx.png",
    location: "New York, NY, United States",
    travel: "Eligible to Travel",
    price: "300 - 1500 for event",
    rating: 3,
}
const videoListDummyData = [
    {
      url: 'https://www.youtube.com/watch?v=Qf9w5kBFJKI',
      title: '',
    },
    {
      url: 'https://www.youtube.com/watch?v=3CsD-JJ0mWE',
      title: '',
    },
    {
      url: 'https://www.youtube.com/watch?v=P2x3-b6JEj8',
      title: '',
    },
    {
      url: 'https://www.youtube.com/watch?v=7BG88HMRVUc',
      title: '',
    },
    {
      url: 'https://www.youtube.com/watch?v=7pFbrxs5FJY',
      title: '',
    },
    {
      url: 'https://www.youtube.com/watch?v=y6ClrLmdT2A',
      title: '',
    },
    {
      url: 'https://www.youtube.com/watch?v=byZO3dMLtpA',
      title: '',
    },
  ]

const newsArray = [
    {
      id: 0,
      fullName: 'Nick Johnson',
      userName: 'raymonfix',
      date: 1526749828299,
      text: 'They say you can choose your friends but not your family. I just want you to know that if we…',
      url: 'https://www.instagram.com/p/BOavR7tDMWt/'
    },
    {
      id: 1,
      fullName: 'Ray Smith Johnson',
      userName: 'raymonfixhogwart',
      date: 1416749828299,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'https://www.instagram.com/p/BOavR7tDMWt/'
    }
  ]

export default UserPage