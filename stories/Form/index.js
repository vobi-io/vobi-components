import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { TextField, SelectField, SelectOption } from '../../src'

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .add(
    'TextField',
    withInfo(`
      TextField component info
    `)(() => (
      <div style={{ padding: '10px' }}>
        <TextField
          fullWidth={boolean('Full width', false)}
          required={boolean('Required', false)}
          flat={boolean('Flat', false)}
          labelText={text('Label', 'Label')}
          type={select('Type', ['text', 'password'])}
          placeholder={text('Hint text', 'Hint')}
          multiLine={boolean('Multiline', false)}
          rows={number('Rows', null)}
          maxRows={number('Max Rows', null)}
          disableResize={boolean('Disable resize', false)}
        />
      </div>
    )),
  )
  .add(
    'SelectField',
    withInfo(`
      SelectField component info
    `)(() => (
      <div style={{ padding: '10px' }}>
        <SelectField
          onChange={action('field-changed')}
          fullWidth={boolean('Full width', false)}
          required={boolean('Required', false)}
          flat={boolean('Flat', false)}
          labelText={text('Label', 'Label')}
          value={select('Value', ['', '1', '2', '3'])}
          multiple
        >
          <SelectOption value="">Choose</SelectOption>
          <SelectOption value="1">Some Option</SelectOption>
          <SelectOption value="2">Second Option</SelectOption>
          <SelectOption value="3" disabled>Disabled Option</SelectOption>
        </SelectField>
      </div>
    )),
  )
