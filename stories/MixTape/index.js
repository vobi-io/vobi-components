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
  Subscribe,
  MainSlider,
  TrendingItem,
  HomePage,
  ToListenPlaylist,
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
    'Home Page',
    withInfo(`
      Home Page
    `)(() => (
      <div style={{ minHeight: 500 }}>
        <HomePage trendingData={dummyDataForTrending} haveToListenData={ToListenPlaylistArray} />
      </div>
    )),
  )
