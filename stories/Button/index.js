import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { ThemeProvider } from 'styled-components'

import { Button } from '../../src'

import themes from '../themes'

const spanStyle = {
  marginLeft: "20px"
}

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withInfo(`
      Default, Primary, Secondary, Green, Red, Yellow, Dark Buttons with Many Options
      Don't Use Together Primary, Secondary, Green, Red, Yellow, Dark or Custom
      Don't Use Together Solid and Round,
      Don't Use Together Sm and Lg,
    `)(() => (
      <div>
          <Button
            onClick={action('button-click')}
            solid={boolean('Solid', false)}
            rounded={boolean('Rounded', false)}
            block={boolean('Block', false)}
            disabled={boolean('Disabled', false)}
            bold={boolean('Bold', false)}
            sm={boolean('Sm', false)}
            lg={boolean('Lg', false)}
            outline={boolean('Outline', false)}
          >
            {text('Default', 'Default')}
          </Button>
          <span style={spanStyle}></span>
          <Button
            onClick={action('button-click')}
            primary
            solid={boolean('Solid', false)}
            rounded={boolean('Rounded', false)}
            block={boolean('Block', false)}
            disabled={boolean('Disabled', false)}
            bold={boolean('Bold', false)}
            sm={boolean('Sm', false)}
            lg={boolean('Lg', false)}
            outline={boolean('Outline', false)}
          >
            {text('Default', 'Primary')}
          </Button>
          <span style={spanStyle}></span>
          <Button
            onClick={action('button-click')}
            secondary
            solid={boolean('Solid', false)}
            rounded={boolean('Rounded', false)}
            block={boolean('Block', false)}
            disabled={boolean('Disabled', false)}
            bold={boolean('Bold', false)}
            sm={boolean('Sm', false)}
            lg={boolean('Lg', false)}
            outline={boolean('Outline', false)}
          >
            {text('Default', 'Secondary')}
          </Button>
          <span style={spanStyle}></span>
          <Button
            onClick={action('button-click')}
            green
            solid={boolean('Solid', false)}
            rounded={boolean('Rounded', false)}
            block={boolean('Block', false)}
            disabled={boolean('Disabled', false)}
            bold={boolean('Bold', false)}
            sm={boolean('Sm', false)}
            lg={boolean('Lg', false)}
            outline={boolean('Outline', false)}
          >
            {text('Default', 'Green')}
          </Button>
          <span style={spanStyle}></span>
          <Button
            onClick={action('button-click')}
            red
            solid={boolean('Solid', false)}
            rounded={boolean('Rounded', false)}
            block={boolean('Block', false)}
            disabled={boolean('Disabled', false)}
            bold={boolean('Bold', false)}
            sm={boolean('Sm', false)}
            lg={boolean('Lg', false)}
            outline={boolean('Outline', false)}
          >
            {text('Default', 'Red Button')}
          </Button>
          <span style={spanStyle}></span>
          <Button
            onClick={action('button-click')}
            yellow
            solid={boolean('Solid', false)}
            rounded={boolean('Rounded', false)}
            block={boolean('Block', false)}
            disabled={boolean('Disabled', false)}
            bold={boolean('Bold', false)}
            sm={boolean('Sm', false)}
            lg={boolean('Lg', false)}
            outline={boolean('Outline', false)}
          >
            {text('Default', 'Yellow')}
          </Button>
          <span style={spanStyle}></span>
          <Button
            onClick={action('button-click')}
            dark
            solid={boolean('Solid', false)}
            rounded={boolean('Rounded', false)}
            block={boolean('Block', false)}
            disabled={boolean('Disabled', false)}
            bold={boolean('Bold', false)}
            sm={boolean('Sm', false)}
            lg={boolean('Lg', false)}
            outline={boolean('Outline', false)}
          >
            {text('Default', 'Dark')}
          </Button>
          <span style={spanStyle}></span>
          <Button
            bg={text('Background-Color', 'tomato')}
            color={text('Text-Color', '#f0f0f0')}
            onClick={action('button-click')}
            solid={boolean('Solid', false)}
            rounded={boolean('Rounded', false)}
            block={boolean('Block', false)}
            disabled={boolean('Disabled', false)}
            bold={boolean('Bold', false)}
            sm={boolean('Sm', false)}
            lg={boolean('Lg', false)}
            outline={boolean('Outline', false)}
          >
            {text('Default', 'Custom')}
          </Button>
      </div>
    )),
  )
