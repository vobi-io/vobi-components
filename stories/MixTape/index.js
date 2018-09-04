import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
// import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import Musician from '../../assets/svg/MixTape/musician1.png'
import Musician1 from '../../assets/svg/MixTape/2pac.jpg'
import Musician2 from '../../assets/svg/MixTape/eminem.jpg'

import SliderPhoto from '../../assets/svg/MixTape/Live-Music.jpg'
import SliderPhotoSecond from '../../assets/svg/MixTape/music.jpg'

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
  WhatsOnComponent,
  Video,
  BlogPost,
  BlogPostPage,
  YouTubeVideo,
  PlaylistSlider,
  TopVideo
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

// mock data for Author Page Profile Info
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
  },
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

const TopVideoData = {
  img: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2018%2F03%2Fdcs9416.jpg%3Fw%3D2000&w=700&q=85',
  songName: 'I\'m Upset',
  duration: '1h',
  songAuthor: 'drake',
  views: 10000,
  comments: 10,
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
  {
    picture: Musician1,
    type: 'Playlists',
    name: 'Grime Up North',
    text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    tracksCount: 15,
    followersCount: 69000,
  },
  {
    picture: Musician,
    type: 'Playlists',
    name: 'Grime Up North',
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


const blogPostData = {
  views: '3000',
  raiting: '5/5',
  date: 'August 23rd 2018',
  author: 'Mohammed Patel',
  text: "Georgia (Georgian: საქართველო, translit.: sakartvelo, IPA: [sɑkʰɑrtʰvɛlɔ] (About this sound listen)) is a country in the Caucasus region of Eurasia. Located at the crossroads of Western Asia and Eastern Europe, it is bounded to the west by the Black Sea, to the north by Russia, to the south by Turkey and Armenia, and to the southeast by Azerbaijan. The capital and largest city is Tbilisi. Georgia covers a territory of 69,700 square kilometres (26,911 sq mi), and its 2017 population is about 3.718 million. Georgia is a unitary semi-presidential republic, with the government elected through a representative democracy.During the classical era, several independent kingdoms became established in what is now Georgia, such as Colchis, later known as Lazica and Iberia. The Georgians adopted Christianity in the early 4th century. The common belief had an enormous importance for spiritual and political unification of early Georgian states. A unified Kingdom of Georgia reached its Golden Age during the reign of King David IV and Queen Tamar in the 12th and early 13th centuries. Thereafter,the kingdom declined and eventually disintegrated under hegemony of various regional powers, including the Mongols, the Ottoman Empire, and successive dynasties of Iran. In the late 18th century, the eastern Georgian Kingdom of Kartli-Kakheti forged an alliance with the Russian Empire, which directly annexed the kingdom in 1801 and conquered the western Kingdom of Imereti in 1810. Russian rule over Georgia was eventually acknowledged in various peace treaties with Iran and the Ottomans and the remaining Georgian territories were absorbed by the Russian Empire in a piecemeal fashion in the course of the 19th century. During the Civil War following the Russian Revolution in 1917, Georgia briefly became part of the Transcaucasian Federation and then emerged as an independent republic before the Red Army invasion in 1921 which established a government of workers' and peasants' soviets. Soviet Georgia would be incorporated into a new Transcaucasian Federation which in 1922 would be a founding republic of the Soviet Union. In 1936, the Transcaucasian Federation was dissolved and Georgia emerged as a Union Republic. During the Great Patriotic War, almost 700,000 Georgians fought in the Red Army against the German invaders. After Soviet leader Joseph Stalin, a native Georgian, died in 1953, a wave of protest spread against Nikita Khrushchev and his de-Stalinization reforms, leading to the death of nearly one hundred students in 1956. From that time on, Georgia would become marred with blatant corruption and increased alienation of the government from the people.",
}

const blogPageData = {
  blogPostData,
  video: 'https://www.youtube.com/watch?v=lt-udg9zQSE',
  tags: ['AJ Tracey', 'Music Video', 'Grime', 'UK Rap', 'London'],
  mayLike: [
    {
      picture: Musician,
      type: 'News',
      header: 'C36 Drops "Guten Tag" Video exclusively on mixtape madness',
      text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
    },
    {
      picture: Musician1,
      type: 'News',
      header: 'Balistik releases the video for "who is next", on mixtape madness',
      text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
    },
    {
      picture: Musician2,
      type: 'News',
      header: 'WSTRN drops their new single "Sharna"',
      text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
    },
    {
      picture: Musician,
      type: 'News',
      header: 'Mo stack covers puma RS-O event in london',
      text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
    },
    {
      picture: Musician1,
      type: 'News',
      header: 'Lady Leshurr Drops Her New Freestyle',
      text: 'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
    },
  ],
}
const mainSliderData = [SliderPhoto, SliderPhotoSecond]

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
          <MainSlider data={mainSliderData} />
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
            mainSliderData={mainSliderData}
          />
        </div>
      )),
  )
  .add(
    'Blog Post',
    withInfo(`
      Blog Post
    `)(() => (
        <div style={{ minHeight: 500 }}>
          <BlogPost data={blogPostData} />
        </div>
      )),
  )
  .add(
    'You Tube Video',
    withInfo(`
      You Tube Video
    `)(() => (
        <div style={{ minHeight: 500 }}>
          <YouTubeVideo url="https://www.youtube.com/watch?v=lt-udg9zQSE" />
        </div>
      )),
  )
  .add(
    'Blog Post Page',
    withInfo(`
      Blog Post Page
    `)(() => (
        <div style={{ minHeight: 500 }}>
          <BlogPostPage blogPageData={blogPageData} />
        </div>
      )),
  )
  .add(
    'Playlist Slider',
    withInfo(`
      Playlist Slider
    `)(() => (
        <div style={{ minHeight: 500 }}>
          <PlaylistSlider data={ToListenPlaylistArray} />
        </div>
      )),
  )
  .add(
    'Top Video',
    withInfo(`
     Top Video
    `)(() => (
        <div style={{ minHeight: 500 }}>
          <TopVideo data={TopVideoData} />
        </div>
      )),
  )
