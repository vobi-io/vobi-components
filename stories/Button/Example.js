import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { CodeBlock } from '../../utils'

import { Button } from '../../src'

const snippets = {
  import: 'import Button from \'wix-style-react/Button\'',
}

export default () =>
  (<div>
      <CodeBlock source={snippets.import} type="jsx" />
      <div>
      <div className="ltr">
              <Button onClick={action('button-click')}>{text('Label', 'Hello Button')}</Button>
          </div>
    </div>
   </div>)
