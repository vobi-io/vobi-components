import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'


import {
  TextField,
  SelectField,
  SelectOption,
  RadioField,
  CheckboxField,
  DateSelector,
  ReactTimePicker,
  DatePicker,
  RangePicker,
  ActionComponent,
  BetterSelector,
} from '../../src'


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
          value={select('Value', {
            '': 'Choose',
            1: 'Some Option',
            2: 'Second Option',
            3: 'Disabled Option',
          })}
        >
          <SelectOption value="">Choose</SelectOption>
          <SelectOption value="1">Some Option</SelectOption>
          <SelectOption value="2">Second Option</SelectOption>
          <SelectOption value="3" disabled>
            Disabled Option
          </SelectOption>
        </SelectField>
      </div>
    )),
  )
  .add(
    'RadioField',
    withInfo(`
      RadioField component info
    `)(() => (
      <RadioField
        labelText={text('Radio Label', 'Radio label')}
        onChange={action('field-changed')}
        disabled={boolean('Disabled', false)}
      />
    )),
  )
  .add(
    'CheckboxField',
    withInfo(`
      CheckboxField component info
    `)(() => (
      <CheckboxField
        labelText={text('Checkbox Label', 'Checkbox label')}
        onChange={action('field-changed')}
        disabled={boolean('Disabled', false)}
        flat={boolean('Flat', false)}
      />
    )),
  )
  .add(
    'DateSelector',
    withInfo(`
      DateSelector component info
    `)(() => <DateSelector labelText={text('DateSelector Label', 'Birth Day')} />),
  )
  .add(
    'Date Picker',
    withInfo(`
      Date Picker component info
    `)(() => (
      <div style={{ padding: '30px' }}>
        <DatePicker
          onDateChange={() => {}}
        />
      </div>
    )),
  )
  .add(
    'React Time Picker',
    withInfo(`
      React Time Picker component info
    `)(() => (
      <div style={{ padding: '99px' }}>
        <ReactTimePicker />
      </div>
    )),
  )
  .add(
    'Range Picker',
    withInfo(`
      Range Picker component info
    `)(() => (
      <div style={{ padding: '30px' }}>
        <RangePicker />
      </div>
    )),
  )
  .add(
    'Better Selector',
    withInfo(`
      Better Selector Component Info
    `)(() => (
      <div style={{ padding: '30px' }}>
        <BetterSelector
          onChange={item => (console.log('Item Changed,', item.value))}
          options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
            { value: 'three', label: 'Three' },
          ]}
          searchable={false}
          style={{ width: '200px', borderRadius: '0px' }}
          menuContainerStyle={{ width: '200px' }}
          value="one"
        />
      </div>
    )),
  )
  .add(
    'Multi Better Selector',
    withInfo(`
      Multi Better Selector Component Info
    `)(() => (
      <div style={{ padding: '30px' }}>
        <BetterSelector
          multi
          onChange={items => (console.log('Item Added to the selected Array', items))}
          options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
            { value: 'three', label: 'Three' },
          ]}
          style={{ width: '300px' }}
          menuContainerStyle={{ width: '300px' }}
          searchable={false}
          placeholder="Choose from here"
        />
      </div>
    )),
   )
  .add(
    'Action Component',
    withInfo(`
      Action Component component info
    `)(() => (
      <div style={{ padding: '30px', margin: '100px' }}>
        <ActionComponent />
      </div>
    )),
  )
