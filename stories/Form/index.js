import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { TextField } from '../../src'

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .add(
    'TextField',
    withInfo(`
      TextField component info
    `)(() => (
      <div style={{ padding: '20px' }}>
        <TextField
          onChange={(action('field-changed'))}
          fullWidth={boolean('Full width', false)}
          required={boolean('Required', false)}
          flat={boolean('Flat', false)}
          labelText={text('Label', 'Label')}
          type={select('Type', ['text', 'password'])}
          value={text('Value', '')}
          placeholder={text('Hint text', 'Hint')}
          multiLine={boolean('Multiline', false)}
          rows={number('Rows', null)}
          maxRows={number('Max Rows', null)}
          disableResize={boolean('Disable resize', false)}
        />
      </div>
    )),
  )
