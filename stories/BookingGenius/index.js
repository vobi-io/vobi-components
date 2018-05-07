import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { withKnobs, text, boolean, number, array, date } from '@storybook/addon-knobs'

import { ArtistCard, Reviews } from '../../src/BookingGenius'

import FeedbackModalExample from './FeedbackModalExample'

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
