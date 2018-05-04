import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

import { Rating } from '../../src'

storiesOf('Extras', module)
  .addDecorator(withKnobs)
  .add(
    'Rating',
    withInfo(`
      Star ratings
    `)(() => (
      <Rating
        onChange={action('New rating')}
      />
    )),
  )
