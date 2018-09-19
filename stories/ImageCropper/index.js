import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'


import Example from './Example'


storiesOf('Image Cropper', module)
  .addDecorator(withKnobs)
  .add(
    'Image Cropper',
    withInfo(`
      Image Cropper Component component info
    `)(() => (
      <div style={{ padding: '30px', margin: '100px' }}>
        <Example />
      </div>
    )),
  )
