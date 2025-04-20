import React from 'react'
import { Table } from 'antd'
import Loading from '../Loading/Loading'

const TableComponent = (props) => {
  const {
    selectionType = 'check',
    data = [],
    isLoading = false,
    columns = []
  } = props

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      )
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name
    })
  }
  return (
    <div>
      <Table
        rowSelection={Object.assign({ type: selectionType }, rowSelection)}
        columns={columns}
        dataSource={data}
        {...props}
      />
    </div>
  )
}

export default TableComponent
