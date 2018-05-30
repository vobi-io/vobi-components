import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'

const Container = styled.div`
  width: 100%;
  background-color: ${props => (props.dark ? '#eaeaea' : '#FFFFFF')};
`
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${props => (props.dark ? '#eaeaea' : '#FFFFFF')};
`
const Thead = styled.thead`
`
const Tbody = styled.tbody`
`
const Tr = styled.tr`
  transition: all 0.2s;
  background-color: ${props => (props.dark ? '#eaeaea' : '#FFFFFF')};
  :nth-child(even) {
    background-color: ${props => (props.striped ? '#f2f2f2' : '')};
  }
  :hover {
    background-color: ${props => (props.hover ? '#f2f2f2' : '')};
  }
`
const Th = styled.th`
  font-size: 14px;
  text-align: center;
  color: #a6a7b1;
  text-align: ${props => (props.align ? props.align : 'left')};
  padding: 20px 5px;
  border-bottom: 1px solid #d8d8d8;
  text-transform: uppercase;
  :not(:last-child) {
    padding-right: 10px;
  }
`
const Td = styled.td`
  font-size: 16px;
  text-align: ${props => (props.align ? props.align : 'left')};
  color: #302f31;
  padding: 20px 5px;
  border-bottom: 1px solid #d8d8d8;
  :not(:last-child) {
    padding-right: 10px;
  }
`


class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.getValue = this.getValue.bind(this)
    this.columnValue = this.columnValue.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  getValue(obj, key) {
    const paths = key.split('.')
    let current = obj

    if (this.props.immutable) {
      return obj.getIn(paths)
    }
    for (let i = 0; i < paths.length; ++i) {
      if (current[paths[i]] === undefined) {
        return undefined
      }
      current = current[paths[i]]
    }

    return current
  }

  columnValue(column, item) {
    let value = this.getValue(item, column.dataKey)
    if (column.dataType === 'date') {
      const dateFormat = column.dataDateFormat || 'DD-MM-YYYY'
      value = moment(value).format(dateFormat)
    }
    return value
  }

  renderRow(item, rowIndex) {
    return this.props.columnConfig.map((column, index) => (
      <Td
        key={index}
        align={column.align}
      >
        {column.render
          ? column.render(this.columnValue(column, item), item, rowIndex)
          : this.columnValue(column, item)}
      </Td>
    ))
  }

  render() {
    const {
      columnConfig, onRowClick, data, hover, striped, hideHeader, dark, emptyText,
    } = this.props

    return (
      <Container dark={dark}>
        <Table dark={dark}>
          {!hideHeader &&
            <Thead>
              <Tr
                onClick={onRowClick}
                dark={dark}
              >
                {columnConfig.map((column, index) => (
                  <Th
                    key={index}
                    align={column.align}
                  >
                    {column.title}
                  </Th>
                ))}
              </Tr>
            </Thead>
          }

          <Tbody>
            {data.size > 0 ? data.map((item, index) => (
              <Tr
                key={index}
                hover={hover}
                striped={striped}
                dark={dark}
              >
                {this.renderRow(item, index)}
              </Tr>
            )) : (
              <Tr dark={dark}>
                <Td colSpan="100%" align="center">{emptyText}</Td>
              </Tr>
            )}
          </Tbody>

        </Table>
      </Container>
    )
  }
}

Grid.propTypes = {
  data: PropTypes.object,
  columnConfig: PropTypes.array,
  onRowClick: PropTypes.func,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  immutable: PropTypes.bool,
  hideHeader: PropTypes.bool,
  dark: PropTypes.bool,
  emptyText: PropTypes.string,
}

Grid.defaultProps = {
  data: [],
  columnConfig: () => false,
  onRowClick: () => false,
  striped: false,
  hover: false,
  immutable: false,
  hideHeader: false,
  dark: false,
  emptyText: 'No records found',
  // filterConfig: [],
  // paging: true,
  // pageSize: 10,
  // wrap: true,
}

export default Grid
