import React from 'react'
import { storiesOf, setAddon } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import { withKnobs } from '@storybook/addon-knobs'
import JSXAddon from 'storybook-addon-jsx'

import { Markdown, CodeExample } from '../../utils'

import Example from './Example'
//import ExampleRaw from '!raw-loader!./Example'

setAddon(JSXAddon)

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add(
    'Dropdown',
    withInfo(`
      Steps for wizard type content
    `)(() => (
      <Example />
    )),
  )