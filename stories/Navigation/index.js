import React from 'react'
import { storiesOf, setAddon } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { withKnobs } from '@storybook/addon-knobs'
import JSXAddon from 'storybook-addon-jsx'

import { Markdown, CodeExample } from '../../utils'

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
