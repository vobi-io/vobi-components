import React from 'react'
import { storiesOf, setAddon } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import { withKnobs } from '@storybook/addon-knobs'
import JSXAddon from 'storybook-addon-jsx'

import { Markdown, CodeExample } from '../../utils'

import { Breadcrumb } from '../../src'

import Readme from '../../src/NavBar/README.md'
import Example from './Example'
import ExampleRaw from '!raw-loader!./Example'

setAddon(JSXAddon)

storiesOf('Navigation', module)
  .addDecorator(withKnobs)
  .addWithJSX('NavBar', () => (
    <div>
      <Markdown source={Readme} />

      <h1 className="sb-header">Usage</h1>

      <CodeExample title="Standard" code={ExampleRaw}>
        <Example />
      </CodeExample>

    </div>
  ))
  .add(
    'Breadcrumb',
    withInfo(`
      Steps for wizard type content
    `)(() => (
      <Breadcrumb
        steps={[{
          title: 'I. General',
          onClick: action('I. General'),
          disabled: true,
        }, {
          title: 'II. Photo & Video',
          onClick: action('II. Photo & Video'),
        }, {
          title: 'III. Booking information',
          onClick: action('III. Booking information'),
        }, {
          title: 'IV. Travel documents',
          onClick: action('IV. Travel documents'),
        }, {
          title: 'V. Recent events',
          onClick: action('V. Recent events'),
        }]}
      />
    )),
  )
