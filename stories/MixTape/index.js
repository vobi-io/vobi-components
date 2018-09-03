import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
// import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import Musician from '../../assets/svg/MixTape/musician1.png'
import Musician1 from '../../assets/svg/MixTape/2pac.jpg'
import Musician2 from '../../assets/svg/MixTape/eminem.jpg'


import {
  Header,
  Footer,
  AboutUs,
  AuthorPage,
  Subscribe,
  MainSlider,
  TrendingItem,
  HomePage,
  ToListenPlaylist,
  Download,
  WhatsOnComponent,
  Video,
  News,
} from '../../src/MixTape'

const Trending = {
  picture: Musician,
  type: 'Music',
  header: 'Skepta & Wizkid Team Up On "No Energy"',
  text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
  author: 'Mohhammed Patel',
  views: '10,000',
}
const dummyDataForTrending = [
  {
    picture: Musician,
    type: 'Music',
    header: 'Skepta & Wizkid Team Up On "No Energy"',
    text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis   natoque penatibus et',
    author: 'Mohhammed Patel',
    views: '10,000',
  },
  {
    picture: Musician1,
    type: 'Music',
    header: 'Lady Leshurr Drops Her New Freestyle',
    text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    author: 'Mohhammed Patel',
    views: '10,000',
  },
  {
    picture: Musician2,
    type: 'News',
    header: 'Inside UK Drill, With 67',
    text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    author: 'Mohhammed Patel',
    views: '10,000',
  },
]

const ToListenPlaylistData = {
  picture: Musician,
  type: 'Playlists',
  name: 'Grime Up North',
  text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
  tracksCount: 15,
  followersCount: 69000,
}

const ToListenPlaylistArray = [
  {
    picture: Musician,
    type: 'Playlists',
    name: 'Grime Up North',
    text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    tracksCount: 15,
    followersCount: 69000,
  },
  {
    picture: Musician2,
    type: 'Playlists',
    name: 'Grime Essentials',
    text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    tracksCount: 15,
    followersCount: 69000,
  },
]

const WhatsOnComponentData = {
  picture: Musician,
  type: 'Video',
  name: 'Grime Up North',
  text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
  views: '10,000',
}

const WhatsOnComponentVideos = [
  {
    picture: Musician,
    type: 'Video',
    name: 'Grime Up North',
    text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    views: '10,000',
  },
  {
    picture: Musician1,
    type: 'Video',
    name: 'Grime Up North',
    text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    views: '10,000',
  },
]
const WhatsOnComponentDataArray = [
  {
    picture: Musician2,
    type: 'News',
    name: 'Grime Up North',
    text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    views: '10,000',
  },
  {
    picture: Musician1,
    type: 'Playlist',
    name: 'Grime Up North',
    text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    views: '10,000',
  },
]

const VideoData = {
  picture: Musician,
  songName: "I'm Upset",
  views: '10k',
  songAuthor: 'Drake',
}

const VideoDataArray = [
  {
    picture: Musician,
    songName: "I'm Upset",
    views: '10k',
    songAuthor: 'Drake',
  },
  {
    picture: Musician1,
    songName: 'Praise The Lord',
    songAuthor: 'A$AP Rocky Feat Skepta',
    views: '10k',
  },
  {
    picture: Musician2,
    songName: 'What You Want',
    songAuthor: 'Belly Feat. The Weeknd',
    views: '10k',
  },
]


// mock data for about us page
const girdData = [
  {
    id: 1,
    icon: 'https://image.flaticon.com/icons/svg/149/149646.svg',
    title: 'Upload Music',
    helperTxt: 'Anytime, Anywhere',
  },

  {
    id: 2,
    icon: 'https://image.flaticon.com/icons/svg/0/191.svg',
    title: 'No Ads',
    helperTxt: 'Non Stop',
  },
  {
    id: 3,
    icon: 'https://image.flaticon.com/icons/svg/109/109197.svg',
    title: 'Any Song',
    helperTxt: 'On Mobile',
  },
  {
    id: 4,
    icon: 'https://image.flaticon.com/icons/svg/0/191.svg',
    title: 'Unlimited Skips',
    helperTxt: 'Wherever, Whenever',
  },
]

// mock data for AUthor Page Profile Info
const AuthorData = {

  profile: {
    img: 'https://www.careersinpoland.com/public/file/articles//845_tips-to-land-secure-job-in-poland-polish-cv-resume.jpg',
    name: 'Bianca Grace',
    ocupation: 'Music Editor',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  posts: [
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20,
    },
  ],
}

storiesOf('MixTape', module)
  .addDecorator(withKnobs)
  .add(
    'Header',
    withInfo(`
      Header
    `)(() => (
      <div>
        <Header />
      </div>
    )),
  )
  .add(
    'AboutUs',
    withInfo(`
     AboutUs
    `)(() => (
      <div>
        <AboutUs data={girdData} />
      </div>
    )),
  )
  .add(
    'Footer',
    withInfo(`
      Footer
    `)(() => (
      <div style={{ minHeight: 500 }}>
        <Footer />
      </div>
    )),
  )
  .add(
    'AuthorPage',
    withInfo(`
    AuthorPage
    `)(() => (
      <div style={{ minHeight: 500 }}>
        <AuthorPage data={AuthorData} />
      </div>
    )),
  )
  .add(
    'Subscribe',
    withInfo(`
      Subscribe
    `)(() => (
      <div style={{ minHeight: 500 }}>
        <Subscribe />
      </div>
    )),
  )
  .add(
    'Slider',
    withInfo(`
      Slider
    `)(() => (
      <div style={{ minHeight: 500 }}>
        <MainSlider />
      </div>
    )),
  )
  .add(
    'News',
    withInfo(`
    News
    `)(() => (
      <div style={{ minHeight: 500 }}>
        <News />
      </div>
    )),
  )
  .add(
    'Trending Item',
    withInfo(`
      Trending Item
    `)(() => (
      <div style={{ minHeight: 500 }}>
        <TrendingItem data={Trending} />
      </div>
    )),
  )
  .add(
    'Have to listen Playlist',
    withInfo(`
      Have to listen Playlist
    `)(() => (
      <div style={{ minHeight: 500 }}>
        <ToListenPlaylist data={ToListenPlaylistData} />
      </div>
    )),
  )
  .add(
    'Download',
    withInfo(`
      Download
    `)(() => (
      <div style={{ minHeight: 500 }}>
        <Download />
      </div>
    )),
  )
  .add(
    'Whats On Component',
    withInfo(`
      Whats On Component
    `)(() => (
      <div style={{ minHeight: 500 }}>
        <WhatsOnComponent data={WhatsOnComponentData} />
      </div>
    )),
  )
  .add(
    'Video',
    withInfo(`
      Video
    `)(() => (
      <div style={{ minHeight: 500 }}>
        <Video data={VideoData} />
      </div>
    )),
  )

  .add(
    'Home Page',
    withInfo(`
      Home Page
    `)(() => (
      <div style={{ minHeight: 500 }}>
        <HomePage
          trendingData={dummyDataForTrending}
          haveToListenData={ToListenPlaylistArray}
          whatsOnVideos={WhatsOnComponentVideos}
          whatsOnData={WhatsOnComponentDataArray}
          videoData={VideoDataArray}
        />
      </div>
    )),
  )
