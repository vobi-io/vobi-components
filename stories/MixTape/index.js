import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
// import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { Header } from '../../src/MixTape'
import { AboutUs } from '../../src/MixTape'

const girdData = [
  {
    icon: "https://image.flaticon.com/icons/svg/149/149646.svg",
    title: "Upload Music",
    helperTxt: "Anytime, Anywhere"
  },

  {
    icon: "https://image.flaticon.com/icons/svg/0/191.svg",
    title: "No Ads",
    helperTxt: "Non Stop"
  },
  {
    icon: "https://image.flaticon.com/icons/svg/109/109197.svg",
    title: "Any Song",
    helperTxt: "On Mobile"
  },
  {
    icon: "https://image.flaticon.com/icons/svg/0/191.svg",
    title: "Unlimited Skips",
    helperTxt: "Wherever, Whenever"
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
