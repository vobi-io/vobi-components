import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { CodeBlock } from '../../utils'

import { Button } from '../../src'

const snippets = {
  import: 'import Button from \'vobi-components/Button\'',
}

export default () => (
  <div>
    <CodeBlock source={snippets.import} type="jsx" />
    <div>
      <div className="ltr">
        <Button onClick={action('button-click')}>{text('Default', 'Defualt')}</Button>
        <br /> <br />
        <Button disabled onClick={action('button-click')}>{text('Disabled', 'Disabled')}</Button>
        <br /> <br />
        <Button primary onClick={action('button-click')}>{text('Primary', 'Primary')}</Button>
        <br /> <br />
        <Button flat onClick={action('button-click')}>{text('Flat', 'Flat')}</Button>
        <br /> <br />
        <Button primary flat onClick={action('button-click')}>{text('Primary Flat', 'Primary Flat')}</Button>
        <br /> <br />
        <Button solid onClick={action('button-click')}>{text('Solid', 'Solid')}</Button>
        <br /> <br />
        <Button primary solid onClick={action('button-click')}>{text('Primary Solid', 'Primary Solid')}</Button>
        <br /> <br />
        <Button flat solid onClick={action('button-click')}>{text('Flat Solid', 'Flat Solid')}</Button>
        <br /> <br />
        <Button primary flat solid onClick={action('button-click')}>{text('Primary Flat Solid', 'Primary Flat Solid')}</Button>
        <br /> <br />
        <Button block onClick={action('button-click')}>{text('Block', 'Block')}</Button>
        <br /> <br />
        <Button primary block onClick={action('button-click')}>{text('Primary Block', 'Primary Block')}</Button>
        <br /> <br />
        <Button flat block onClick={action('button-click')}>{text('Flat Block', 'Flat Block')}</Button>
        <br /> <br />
        <Button primary flat block onClick={action('button-click')}>{text('Primary Flat Block', 'Primary Flat Block')}</Button>
        <br /> <br />
        <Button solid block onClick={action('button-click')}>{text('Solid Block', 'Solid Block')}</Button>
        <br /> <br />
        <Button primary solid block onClick={action('button-click')}>{text('Primary Solid Block', 'Primary Solid Block')}</Button>
        <br /> <br />
        <Button flat solid block onClick={action('button-click')}>{text('Flat Solid Block', 'Flat Solid Block')}</Button>
        <br /> <br />
        <Button primary solid flat block onClick={action('button-click')}>{text('Primary Flat Solid Block', 'Primary Flat Solid Block')}</Button>
      </div>
    </div>
  </div>
)
