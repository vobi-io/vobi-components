import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs'

import { ArtistCard } from '../../src/BookingGenius'

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
