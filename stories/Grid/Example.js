import React from 'react'
import { fromJS } from 'immutable'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { CodeBlock } from '../../utils'

import { Grid } from '../../src'

const sampleData = fromJS([{
  firstName: 'John',
  lastName: 'Doe',
  createdAt: new Date(),
}, {
  firstName: 'John',
  lastName: 'Doe',
  createdAt: new Date(),
}, {
  firstName: 'John',
  lastName: 'Doe',
  createdAt: new Date(),
}, {
  firstName: 'John',
  lastName: 'Doe',
  createdAt: new Date(),
}, {
  firstName: 'John',
  lastName: 'Doe',
  createdAt: new Date(),
}])

export default class GridExample extends React.Component {
  constructor() {
    super()
    this.updateOptions = this.updateOptions.bind(this)

    this.state = {
      options: {
        striped: false,
        hover: false,
        hideHeader: false,
        dark: false,
      },
      data: sampleData,
    }

    this.columnConfig = [
      {
        dataKey: 'firstName',
        title: 'First Name',
      },
      {
        dataKey: 'firstName',
        title: 'First Name',
      },
      {
        dataKey: 'createdAt',
        title: 'Created',
        dataType: 'date',
        dataDateFormat: 'DD-MM',
      },
    ]
  }

  updateOptions(key, value) {
    const { options } = this.state
    options[key] = value
    this.setState(prevState => ({
      ...prevState,
      options,
    }))
  }

  toggleData(value) {
    this.setState(prevState => ({
      ...prevState,
      data: value ? sampleData : fromJS([]),
    }))
  }

  render() {
    const { options, data } = this.state
    return (
      <div>
        <div>
          <div
            className="ltr"
            style={{
              backgroundColor: options.dark ? '#eaeaea' : '#ffffff',
              border: 'solid 1px #dbdbdb',
              transition: 'all 0.2s',
              width: 1200,
              margin: 'auto',
              padding: 20,
              paddingTop: 0,
            }}
          >
            <Grid
              data={data}
              columnConfig={this.columnConfig}
              currentPage={1}
              busy={false}
              pageSize={10}
              totalCount={10}
              emptyText="No rows found"
              striped={options.striped}
              hover={options.hover}
              hideHeader={options.hideHeader}
              dark={options.dark}
              immutable
            />
          </div>
        </div>

        <h1 className="sb-header">options</h1>
        <div>
          <table className="sb-table">
            <tbody>
              <tr>
                <td>Striped</td>
                <td><input type="checkbox" onChange={e => this.updateOptions('striped', e.target.checked)} /></td>
              </tr>
              <tr>
                <td>Hover</td>
                <td><input type="checkbox" onChange={e => this.updateOptions('hover', e.target.checked)} /></td>
              </tr>
              <tr>
                <td>Toggle header</td>
                <td><input type="checkbox" onChange={e => this.updateOptions('hideHeader', e.target.checked)} /></td>
              </tr>
              <tr>
                <td>Dark</td>
                <td><input type="checkbox" onChange={e => this.updateOptions('dark', e.target.checked)} /></td>
              </tr>
              <tr>
                <td>Toggle data</td>
                <td><input type="checkbox" checked={data.size > 0} onChange={e => this.toggleData(e.target.checked)} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
