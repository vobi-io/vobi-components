import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Button, DropdownMenu } from '../../src'

export default class ModalExample extends React.Component {
  constructor() {
    super()
    this.state = {
      isShown: false,
    }
  }


  render() {
    return (
      <div>
        <div>
          <div className="ltr">
            <DropdownMenu
              onToggle={isShown => this.setState({ isShown })}
            >
              <div data-slot="trigger">
                <Button primary solid={this.state.isShown}>Toggle Menu</Button>
              </div>
              <div data-slot="content">
                <div>
                  <ul style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                  }}
                  >
                    <li style={{
                      display: 'flex', alignItems: 'center', height: 50, paddingLeft: 50,
                    }}
                    >Item
                    </li>
                    <li style={{
                      display: 'flex', alignItems: 'center', height: 50, paddingLeft: 50, backgroundColor: '#f1f6f3',
                    }}
                    >Item
                    </li>
                    <li style={{
                      display: 'flex', alignItems: 'center', height: 50, paddingLeft: 50,
                    }}
                    >Item
                    </li>
                    <li style={{
                      display: 'flex', alignItems: 'center', height: 50, paddingLeft: 50, backgroundColor: '#f1f6f3',
                    }}
                    >Item
                    </li>
                    <li style={{
                      display: 'flex', alignItems: 'center', height: 50, paddingLeft: 50,
                    }}
                    >Item
                    </li>
                  </ul>
                </div>
              </div>
            </DropdownMenu>

          </div>
        </div>
      </div>
    )
  }
}
