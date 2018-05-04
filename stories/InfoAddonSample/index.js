import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import NavBar from '../../src/NavBar'

storiesOf('NavBar', module)
  .add(
    'some info',
    withInfo(`
      description or documentation about NavBar component, supports markdown
    `)(() => (
      <NavBar
        pages={[{
          title: 'Home',
          href: '#',
        }, {
          title: 'About',
          href: '#',
        }, {
          title: 'Contact',
          href: '#',
        }]}
      />
    )),
  )

