import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
// import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import {
  Header,
  Footer,
  Subscribe,
} from '../../src/MixTape'

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
