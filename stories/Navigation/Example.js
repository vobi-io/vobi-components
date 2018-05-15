import React from 'react'
import { text } from '@storybook/addon-knobs'

import { CodeBlock } from '../../utils'
import { NavBar } from '../../src'

const snippets = {
  import: 'import NavBar from \'vobi-components/NavBar\'',
  navbar: `
    <NavBar
      brandName="BookingGenius"
      leftPages={[{
        title: 'About',
        href: '#',
      }]}
      rightPages={[{
        title: 'Service',
        href: '#',
      }, {
        title: 'Browse',
        href: '#',
      }, {
        title: 'Dashboard',
        href: '#',
      }, {
        title: 'FAQ',
        href: '#',
      }, {
        title: 'Help',
        href: '#',
      }]}
      user={user}
    />
  `,
}

const user = {
  avatar: text('Avatar', 'https://avatars2.githubusercontent.com/u/2933601?s=460&v=4'),
}

export default () => (
  <div>
    <CodeBlock source={snippets.import} type="jsx" />
    <br />
    <br />
    <div>
      <div className="ltr">
        <NavBar
          brandName="BookingGenius"
          rightPages={[{
            title: 'About',
            href: '#',
          }, {
            title: 'Service',
            href: '#',
          }, {
            title: 'Browse',
            href: '#',
          }, {
            title: 'Dashboard',
            href: '#',
          }, {
            title: 'FAQ',
            href: '#',
          }, {
            title: 'Help',
            href: '#',
          }]}
          user={user}
        />
      </div>
    </div>
    <br />
    <br />
    <br />
    <div>
      <div className="ltr">
        <NavBar
          brandName="BookingGenius"
          leftPages={[{
            title: 'About',
            href: '#',
          }, {
            title: 'Service',
            href: '#',
          }, {
            title: 'Browse',
            href: '#',
          }]}
        />
      </div>
    </div>
    <br />
    <br />
    <br />
    <div>
      <div className="ltr">
        <NavBar
          brandName="BookingGenius"
          rightPages={[{
            title: 'About',
            href: '#',
          }, {
            title: 'Service',
            href: '#',
          }, {
            title: 'Browse',
            href: '#',
          }, {
            title: 'Dashboard',
            href: '#',
          }, {
            title: 'FAQ',
            href: '#',
          }, {
            title: 'Help',
            href: '#',
          }]}
        />
      </div>
    </div>
    <br />
    <br />
    <br />
    <div>
      <div className="ltr">
        <NavBar
          brandName="BookingGenius"
          leftPages={[{
            title: 'Browse',
            href: '#',
          }]}
          rightPages={[{
            title: 'About',
            href: '#',
          }, {
            title: 'Service',
            href: '#',
          }, {
            title: 'Dashboard',
            href: '#',
          }, {
            title: 'FAQ',
            href: '#',
          }, {
            title: 'Help',
            href: '#',
          }]}
          user={user}
        />
      </div>
    </div>


    <br />
    <br />
    <h1 className="sb-header">Code</h1>
    <CodeBlock source={snippets.navbar} type="jsx" />
    <br />
    <br />
  </div>
)
