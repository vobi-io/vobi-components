import React, { Component } from 'react'
import NavBar from '../../NavBar'
import VideoArea from '../VideoArea'
import AboutForm from './AboutForm'
import VideoList from '../VideoList'
import Reviews from '../Reviews'
import BookingTerms from './BookingTerms'
import RecentEvents from './RecentEvents'
import ArtistCard from '../ArtistCard'
import LatestNews from '../LatestNews'


import styled from 'styled-components'

const Container = styled.div`
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    background-color: #f4f4f5;
    max-width: 87.5rem;
    min-height: 144.2rem;

    @media only screen and (max-width: $bp-largest) {
        margin: 0;
        max-width: 100%;
        width: 100%;
    }
`
const Header = styled.header`
   display:block;
`
const Content = styled.div`
    display: flex;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
`
const VideosWrapper = styled.div`
    margin-top:16px;
    background-color: #ffffff;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.11);
`
const VideoAreaBox = styled.div`
  width: 838px;
  height: 462px;
  background-image: linear-gradient(299deg, rgba(56, 24, 24, 0), rgba(0, 0, 0, 0.43));
  background-size:cover;
`
const EventsWrapper = styled.div`
    margin-top:16px;
    background-color: #ffffff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
`
const ReviewsWrapper = styled.div`
    margin-top: 16px;
    background-color: #ffffff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
`
const BookingTermsWrapper = styled.div`
    margin-top:16px;
    background-color: #ffffff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
`
const LatestNewsWrap = styled.div`
    flex-grow:1;
    width:100%;
    margin-top:16px;
`
const Main = styled.main`
    display:flex;
    flex-direction: column;
    flex: 2.25 0 0;
    padding-top: 24px;
    padding-left: 75px;
    padding-right:16px;
    
`
const MainList = styled.div`
    display:flex;
    flex-direction:column;
    width:838px;
`
const SideBar = styled.nav`
    background-color: #f4f4f5;
    padding:24px 0px;
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
`
const newsArray = [
  {
    id: 0,
    fullName: 'Nick Johnson',
    userName: 'raymonfix',
    date: 1526749828299,
    text: 'They say you can choose your friends but not your family. I just want you to know that if we…',
    url: 'https://www.instagram.com/p/BOavR7tDMWt/',
  },
  {
    id: 1,
    fullName: 'Ray Smith Johnson',
    userName: 'raymonfixhogwart',
    date: 1416749828299,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: 'https://www.instagram.com/p/BOavR7tDMWt/',
  },
]

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

const ProfilePage = () => (

  <Container>
    <Header>
      <NavBar
        brandName="BookingGenius"
        rightPages={[{
          title: 'About',
          href: '#',
        }, {
          title: 'Service',
          href: '#',
        }, {
          title: 'Browse',
          href: '#',
        }, {
          title: 'Dashboard',
          href: '#',
        }, {
          title: 'FAQ',
          href: '#',
        }, {
          title: 'Help',
          href: '#',
        }]}
      />
    </Header>
    <Content>
      <Main>
        <VideoAreaBox>
          <VideoArea
            createdAt="2018-04-09T11:38:42.967Z"
            width="838px"
            height="462px"
            imageUrl={('imageUrl', 'https://img.youtube.com/vi/fKopy74weus/maxresdefault.jpg')}
          />
        </VideoAreaBox>
        <MainList>
          <AboutForm />
          <EventsWrapper>
            <RecentEvents />
          </EventsWrapper>
          <VideosWrapper>
            <VideoList
              videoData={videoListDummyData}
              title="VideoList"
              numberOfItemsInLine={4}
            />
          </VideosWrapper>
          <ReviewsWrapper>
            <Reviews
              rating={5}
              reviews={[{
                title: 'Dedicated Desk - 5 Available at VOCAL, 625 Broadway Avenue, 3rd Floor, New York, NY, United States',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                createdAt: new Date('April 16 2017'),
              }, {
                title: 'Team Office for 35, 77 Bleecker Street, New York, Ge, United States',
                description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                createdAt: new Date('April 16 2017'),
              }, {
                title: 'Dedicated Desk - 1 Available at The Farm SoHo,76 Wooster Street, New York, NY, United State',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                createdAt: new Date('April 16 2017'),
              }]}
            />
          </ReviewsWrapper>
          <BookingTermsWrapper>
            <BookingTerms
              mainTitle="Talent Booking Terms"
              title="The Small Change That Creates Massive Results In Your Life"
              description="Keeping one’s self going is a difficult thing to do. There are a million distractions that occur every day and that can mean that we do not stay on track with what we should be doing. Self-motivation is something that does not come easy to a lot of people and that means that there are some steps that need to be taken before you can become motivated to the fullest extent. Read more"
            />
          </BookingTermsWrapper>
        </MainList>
      </Main>
      <SideBar>
        <ArtistCard
          artist={{
            avatar: 'https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc',
            fullName: 'Bugle Shaggy',
            verified: true,
            address: 'New York, NY, United States',
            tags: ['Reggae', 'ska', 'rocksteady'],
            rating: 4,
            reviews: ['', '', '', '', ''],
            price: {
              min: 300,
              max: 1500,
            },
          }}
          containerWidth="371px"
          avatarWidth="307px"
          eligibleToTravel
          avatarOnTop
        />
        <LatestNewsWrap>
          <LatestNews news={newsArray} />
        </LatestNewsWrap>
      </SideBar>
    </Content>
  </Container>
)
export default ProfilePage
