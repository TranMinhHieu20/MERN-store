import React from 'react'
import { WrapperHeader } from './styleAdminUser'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'

function AdminUser() {
  return (
    <div>
      <WrapperHeader>Quản lý người dùng</WrapperHeader>
      <div style={{ marginTop: '10px' }}>
        <Button
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '6px',
            borderStyle: 'dashed'
          }}
        >
          <PlusOutlined style={{ fontSize: '50px' }} />
        </Button>
        <div style={{ marginTop: '20px' }}>
          <TableComponent />
        </div>
      </div>
    </div>
  )
}

export default AdminUser
