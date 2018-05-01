import React from 'react'
import { storiesOf } from '@storybook/react'

import Markdown from '../../utils/Markdown'
import CodeExample from '../../utils/CodeExample'

import Readme from '../../src/Button/README.md'
import Example from './Example'
import ExampleRaw from '!raw-loader!./Example'

storiesOf('Buttons', module)
  .add('Buttons', () => (
      <div>
        <Markdown source={Readme} />

        <h1>Usage examples</h1>

        <CodeExample title="Standard" code={ExampleRaw}>
          <Example />
      </CodeExample>

    </div>
  ))
