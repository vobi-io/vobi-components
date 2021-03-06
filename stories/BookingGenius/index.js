import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number, array, date } from '@storybook/addon-knobs'

import {
  ArtistCard,
  Reviews,
  MessageBox,
  NumberedCard,
  EventCalendar,
  VideoList,
  Favorite,
  VideoArea,
  MessageList,
  Pagination,
  LatestNews,
  TalentCard,
  RequestLayout,
  TalentPage,
  TransactionPage,
  TalentSlider,
  ActiveBookingPage,
  UserPage,
  RequestListPage,
  BetterSelector
} from '../../src/BookingGenius'

import FeedbackModalExample from './FeedbackModalExample'
import VideoPreviewModalExample from './VideoPreviewModalExample'
import SignupModalExample from './SignupModalExample'
import SocialSignupModalExample from './SocialSignupModalExample'

const artistData = [
  {
      img: 'https://i.imgur.com/yl34Ayi.png',
      profession: 'dancer',
      fullName: 'David Lakovsky',
      rating: 5,
      reviewCount: 93
  },
  {
      img: 'https://i.imgur.com/19HpIUV.png',
      profession: 'singer',
      fullName: 'Hue Montorello',
      rating: 1,
      reviewCount: 98
  },
  {
      img: 'https://i.imgur.com/pb0Zb3S.png',
      profession: 'dj',
      fullName: 'Lui Nesh',
      rating: 4,
      reviewCount: 134
  },
  {
      img: 'https://i.imgur.com/5IXinO1.png',
      profession: 'singer',
      fullName: 'Elisabeth Vekkel',
      rating: 3,
      reviewCount: 255
  },
  {
      img: 'https://i.imgur.com/Sx75sVi.png',
      profession: 'magician',
      fullName: 'Henry Celigber',
      rating: 5,
      reviewCount: 23
  },
  {
      img: 'https://i.imgur.com/eF9yQFF.png',
      profession: 'dj',
      fullName: 'Pola Makkensy',
      rating: 2,
      reviewCount: 55
  }
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

const messagesListItemData = {
  inboxMessageDate: 1526470210473,
  replyMessageDate: 1526170210473,
  inboxAvatar: 'https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg',
  replyAvatar:  'https://i0.wp.com/www.allinsonsphotography.co.uk/wp-content/uploads/2013/04/untitled-20.jpg?w=300',
  inboxFrom: 'Nick Jonson',
  replyFrom: 'Nick V',
  inbox: ['Okay:)'],
  reply: ['Hi Nick', 'thanks you for the nice talk', 'Waiting your question', 'Cheers', 'Nick']
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

const messages = [
  {
    user: {
      avatar: 'https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc',
    },
    messages: [
      'Hi',
      'How are you',
    ],
    lastMessageDate: new Date(),
  }, {
    user: {
      avatar: 'https://www.hellomagazine.com/imagenes/celebrities/2017101143124/angelina-jolie-womens-rights-harpers-bazaar/0-220-355/angelina-jolie-womens-rights-t.jpg',
    },
    messages: [
      'Thanks, fine',
      'And you?',
    ],
    lastMessageDate: new Date(),
  }, {
    user: {
      avatar: 'https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc',
    },
    messages: [
      'Thanks',
      'Me too',
    ],
    lastMessageDate: new Date(),
  },
]

const CalendarEvents = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
    artist: 'Ted Rogers',
    archived: true,
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 9, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2015, 3, 20, 19, 30, 0),
    end: new Date(2015, 3, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
]

storiesOf('BookingGenius', module)
  .addDecorator(withKnobs)
  .add(
    'ArtistCard',
    withInfo(`
      ArtistCard
    `)(() => (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
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
          view = {false}
        />
        <ArtistCard
          artist={{
            avatar: text('Avatar', 'https://www.hellomagazine.com/imagenes/celebrities/2017101143124/angelina-jolie-womens-rights-harpers-bazaar/0-220-355/angelina-jolie-womens-rights-t.jpg'),
            fullName: text('Full name', 'Bugle Shaggy'),
            verified: boolean('Verified', false),
            address: text('Address', 'New York, NY, United States'),
            tags: array('Tags', ['Reggae', 'ska', 'rocksteady']),
            rating: number('Rating', 4),
            reviews: array('Reviews', ['1', '2', '3', '4', '5']),
            price: {
              min: number('Price Min', 300),
              max: number('Price max', 1500),
            },
          }}
          view = {false}
        />
      </div>
    )),
  )
  .add(
    'Reviews',
    withInfo(`
      Reviews
    `)(() => (
      <div>
        <div style={{ width: '838px', margin: 'auto' }}>
          <Reviews
            rating={number('Rating', 2)}
            reviews={[{
              title: 'Team Office for 35, 77 Bleecker Street, New York, NY, United States',
              description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              createdAt: new Date(),
            }, {
              title: 'Team Office for 35, 77 Bleecker Street, New York, Ge, United States',
              description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              createdAt: '2018-04-09T11:38:42.967Z',
            }, {
              title: 'Team Office for 35, 77 Bleecker Street, New York, AE, United States',
              description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              createdAt: new Date(),
            }, {
              title: text('Title', 'Team Office for 35, 77 Bleecker Street, New York, DE, United States'),
              description: text('Description', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
              createdAt: date('Created at', new Date('Jan 20 2017')),
            }]}
          />
        </div>
      </div>
    )),
  )
  .add('Feedback Modal', () => <FeedbackModalExample />)
  .add(
    'Message Box',
    withInfo(`
      Message Box
    `)(() => (
      <div>
        <div style={{ width: '838px', margin: 'auto' }}>
          <MessageBox
            messages={messages}
            onSend={action('On new message send')}
          />
        </div>
      </div>
    )),
  )
  .add(
    'NumberedCard',
    withInfo(`
      NumberedCard component info
    `)(() => (
      <div style={{ padding: '20px' }}>
        <NumberedCard
          text={text('Text', 'Balance')}
          amount={text('Amount', '$1250')}
        />
      </div>
    )),
  )
  .add(
    'EventCalendar',
    withInfo(`
      EventCalendar component info
    `)(() => (
      <div style={{ padding: '20px' }}>
        <EventCalendar
          defaultDate={new Date(2018, 2, 1)}
          events={CalendarEvents}
          views={['month', 'day', 'week']}
          formats={{
            dateFormat: 'D',
          }}
        />
      </div>
    )),
  )
  .add(
    'EventCalendar minimal',
    withInfo(`
      EventCalendar component info
    `)(() => (
      <div style={{ padding: '20px' }}>
        <EventCalendar
          defaultDate={new Date(2018, 2, 1)}
          events={CalendarEvents}
          mode="minimal"
          views={['month']}
          formats={{
            dateFormat: 'D',
            weekdayFormat: 'dd',
          }}
          messages={{
            next: '>',
            previous: '<',
          }}
        />
      </div>
    )),
  )
  .add('Sign Up Modal', () => <SignupModalExample />)
  .add('Social Sign Up Modal', () => <SocialSignupModalExample />)
  .add(
    'Favorite',
    withInfo(`
      Favorite On/Off
    `)(() => (
      <div style={{ display: 'flex', height: '100vh', background: '#F44336', justifyContent: 'center', alignItems: 'center' }}>
        <Favorite
          favorited={boolean('favorited', false)}
        />
      </div>
    )),
  )
  .add(
    'VideoList',
    withInfo(`
      VideoList
    `)(() => (
      <div style={{ display: 'flex', justifyContent: 'center', background: '#f4f4f5', height: '100vh', alignItems: 'center' }}>
        <VideoList
          videoData={videoListDummyData}
          title="VideoList"
          numberOfItemsInLine={number('numberOfItemsInLine', 5)}
        />
      </div>
    )),
  )
  .add('Video Area Component', () => (
    <div style={{ display: 'flex', justifyContent: 'center', background: '#f4f4f5', height: '650px', alignItems: 'center' }}>
      <div>
        <h1 style={{ textAlign: 'center', marginBottom: '55px'}}>Note: Image Aspect Ratio 16 : 9</h1>
        <VideoArea
          imageUrl={text('imageUrl', 'https://img.youtube.com/vi/fKopy74weus/maxresdefault.jpg')} />
      </div>
    </div>
  ))
  .add('Message List', () => (
    <div style={{ display: 'flex', justifyContent: 'center', background: '#f4f4f5', height: '750px', alignItems: 'center' }}>
      <MessageList messages={messagesListItemData}/>
    </div>
  ))
  .add('Video Preview Modal', () => <VideoPreviewModalExample />)
  .add(
    'TalentCard',
    withInfo(`
      TalentCard
    `)(() => (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <TalentCard
          artist={{
            avatar: text('Avatar', 'https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc'),
            fullName: text('Full Name', 'Raymond Fix'),
            address: text('Adress','USA, Florida'),
            favorited: boolean('favorited', true),
            rating: number('Rating', 4),
            genre: text('Genre', 'R&B'),
            price: number('Price', 130),
          }}
        />
      </div>
    )),
  )
  .add('Latest News', () => (
    <div style={{ display: 'flex', justifyContent: 'center', background: '#f4f4f5', height: '750px', alignItems: 'center' }}>
      <LatestNews news={newsArray} />
    </div>
  ))
  .add('Pagination', () => (
    <div style={{ display: 'flex', paddingLeft: '50px', background: '#f4f4f5', height: '100vh', alignItems: 'center' }}>
      <Pagination pageCount={5}/>
    </div>
  ))
  .add('Talent Slider', () => (
      <TalentSlider 
        heading={'hot talents'}
        artistList={artistData}
      />
  ))
  .add('Talent Page', () => (
    <div style={{ display: 'flex', justifyContent: 'center', background: '#f4f4f5', height: '1196px', alignItems: 'center' }}>
      <TalentPage />
    </div>
  ))
  .add('Active Booking Page', () => (
    <ActiveBookingPage 
      artist={{
        avatar: 'https://d2a2cq7hbv4jvj.cloudfront.net/wp-content/uploads/2018/05/DJ-Remake-blog.jpg',
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
    messages={messagesListItemData}
    />
  ))
  .add('Request Layout', () => (
    <RequestLayout />
  ))
  .add('RequestList Page', () => (
    <div style={{ display: 'flex', justifyContent: 'center', background: '#f4f4f5', alignItems: 'center' }}>
      <RequestListPage />
    </div>
  ))
  .add('Transaction Page', () => (
    <div style={{ display: 'flex', justifyContent: 'center', background: '#f4f4f5', alignItems: 'center' }}>
      <TransactionPage />
    </div>
  ))
  .add('User Page Layout', () => (
    <div style={{ display: 'flex', justifyContent: 'center', background: '#f4f4f5', alignItems: 'center' }}>
      <UserPage />
    </div>
  ))

