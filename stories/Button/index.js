import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { ThemeProvider } from 'styled-components'

import { Button } from '../../src'

import themes from '../themes'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withInfo(`
      Button component info
    `)(() => (
      <div>
        <ThemeProvider
          theme={themes[select(
            'Theme', {
              defaultTheme: 'Default Theme',
              bookingGeniusTheme: 'Booking Genius Theme',
            },
            'defaultTheme',
          )]}
        >
          <Button
            onClick={action('button-click')}
            primary={boolean('Primary', false)}
            solid={boolean('Solid', false)}
            flat={boolean('Flat', false)}
            block={boolean('Block', false)}
          >
            {text('Default', 'Button Label')}
          </Button>
        </ThemeProvider>
      </div>
    )),
  )
