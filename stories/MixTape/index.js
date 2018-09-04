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
  News,
  TrendingItem,
  HomePage,
  ToListenPlaylist,
  Download,
  Post,
} from '../../src/MixTape'


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
  img: 'https://www.careersinpoland.com/public/file/articles//845_tips-to-land-secure-job-in-poland-polish-cv-resume.jpg',
  name: 'Bianca Grace',
  ocupation: 'Music Editor',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

const PostsFirstPart = [
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
  }
]
const PostsSecondPart = [
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
]
const TopMusicPosts = [
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
]

const PostData = {
  img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
  title: 'Inside Uk,with 67',
  PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  author: 'Mohamed Patal',
  CreationDate: 1,
  comments: 10,
  shares: 20,
}

const TopVideosData = [
  {
    img: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2018%2F03%2Fdcs9416.jpg%3Fw%3D2000&w=700&q=85',
    songName: 'I\'m Upset',
    duration: '1h',
    songAuthor: 'drake',
    views: 10000,
    comments: 10,
  },
  {
    img: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2018%2F03%2Fdcs9416.jpg%3Fw%3D2000&w=700&q=85',
    songName: 'I\'m Upset',
    duration: '1h',
    songAuthor: 'drake',
    views: 10000,
    comments: 10,
  },
  {
    img: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2018%2F03%2Fdcs9416.jpg%3Fw%3D2000&w=700&q=85',
    songName: 'I\'m Upset',
    duration: '1h',
    songAuthor: 'drake',
    views: 10000,
    comments: 10,
  },
  {
    img: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2018%2F03%2Fdcs9416.jpg%3Fw%3D2000&w=700&q=85',
    songName: 'I\'m Upset',
    duration: '1h',
    songAuthor: 'drake',
    views: 10000,
    comments: 10,
  },
  {
    img: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2018%2F03%2Fdcs9416.jpg%3Fw%3D2000&w=700&q=85',
    songName: 'I\'m Upset',
    duration: '1h',
    songAuthor: 'drake',
    views: 10000,
    comments: 10,
  },
]

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
    text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
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
          <AuthorPage
            AuthorData={AuthorData}
            PostsFirstPart={PostsFirstPart}
            PostsSecondPart={PostsSecondPart}
          />
        </div>
      )),
  )
  .add(
    'Post',
    withInfo(`
          Post
          `)(() => (
        <div style={{ minHeight: 500 }}>
          <Post data={PostData} />
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
          <News

            PostsFirstPart={PostsFirstPart}
            PostsSecondPart={PostsSecondPart}
            TopMusicPosts={TopMusicPosts}
            TopVideosData={TopVideosData} />
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
    'Home Page',
    withInfo(`
            Home Page
          `)(() => (
        <div style={{ minHeight: 500 }}>
          <HomePage trendingData={dummyDataForTrending} haveToListenData={ToListenPlaylistArray} />
        </div>
      )),
  )
