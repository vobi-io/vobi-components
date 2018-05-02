import React from 'react'

import { CodeBlock } from '../../utils'
import { NavBar } from '../../src'

const snippets = {
  import: 'import NavBar from \'vobi-components/NavBar\'',
}

export default () => (
  <div>
    <CodeBlock source={snippets.import} type="jsx" />
    <br />
    <br />
    <div>
      <div className="ltr">
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
      </div>
    </div>
  </div>
)
