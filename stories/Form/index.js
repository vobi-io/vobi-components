import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .add('Input', () => <div>Input here...</div>)
  .add('Textarea', () => <div>Textarea here...</div>)
