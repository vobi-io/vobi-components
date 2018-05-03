import React from 'react'
import { storiesOf, setAddon } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import JSXAddon from 'storybook-addon-jsx'

import Button from './Button'

setAddon(JSXAddon)

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addWithJSX('defualt', () =>
    <Button onClick={action('button-click')}>{text('Label', 'Defualt')}</Button>)
  .addWithJSX('primary', () =>
    <Button primary onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('default flat', () =>
    <Button flat onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('primary flat', () =>
    <Button primary flat onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('default solid', () =>
    <Button solid onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('primary solid', () =>
    <Button primary solid onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('default flat solid', () =>
    <Button flat solid onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('primary flat solid', () =>
    <Button primary flat solid onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('default block', () =>
    <Button block onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('primary block', () =>
    <Button primary block onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('default flat block', () =>
    <Button flat block onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('primary flat block', () =>
    <Button primary flat block onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('default solid block', () =>
    <Button solid block onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('primary solid block', () =>
    <Button primary solid block onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('default flat solid block', () =>
    <Button flat solid block onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)
  .addWithJSX('primary flat solid block', () =>
    <Button primary solid flat block onClick={action('button-click')}>{text('Label', 'Button Label')}</Button>)

