import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
// import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import {
  Header,
  Footer,
  AboutUs,
  AuthorPage,
  Subscribe,
  MainSlider,
  News
} from '../../src/MixTape'


// mock data for about us page
const girdData = [
  {
    id: 1,
    icon: "https://image.flaticon.com/icons/svg/149/149646.svg",
    title: "Upload Music",
    helperTxt: "Anytime, Anywhere"
  },

  {
    id: 2,
    icon: "https://image.flaticon.com/icons/svg/0/191.svg",
    title: "No Ads",
    helperTxt: "Non Stop"
  },
  {
    id: 3,
    icon: "https://image.flaticon.com/icons/svg/109/109197.svg",
    title: "Any Song",
    helperTxt: "On Mobile"
  },
  {
    id: 4,
    icon: "https://image.flaticon.com/icons/svg/0/191.svg",
    title: "Unlimited Skips",
    helperTxt: "Wherever, Whenever"
  },
]

// mock data for AUthor Page Profile Info
const AuthorData = {

  profile: {
    img: 'https://www.careersinpoland.com/public/file/articles//845_tips-to-land-secure-job-in-poland-polish-cv-resume.jpg',
    name: 'Bianca Grace',
    ocupation: 'Music Editor',
    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  posts: [
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet,  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    },
    {
      img: 'https://i.pinimg.com/originals/30/35/c0/3035c0dbdb704ec8107ec1140c340702.jpg',
      title: 'Inside Uk,with 67',
      PostDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Mohamed Patal',
      CreationDate: 1,
      comments: 10,
      shares: 20
    }
  ]
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
