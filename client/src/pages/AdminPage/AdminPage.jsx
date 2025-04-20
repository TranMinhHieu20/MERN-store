import React, { useState } from 'react'
import { CloudFilled, ProductOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import AdminUser from '../../components/AdminUser/AdminUser'
import AdminProduct from '../../components/AdminProduct/AdminProduct'

const items = [
  {
    key: 'user',
    icon: <UserOutlined />,
    label: 'Người dùng'
  },
  {
    key: 'product',
    icon: <ProductOutlined />,
    label: 'Sản phẩm'
  }
]

function AdminPage() {
  const [keySelected, setKeySelected] = useState('user')

  const renderPage = (key) => {
    switch (key) {
      case 'user':
        return <AdminUser />
      case 'product':
        return <AdminProduct />
      default:
        return <></>
    }
  }
  const handleOnClick = ({ key }) => {
    setKeySelected(key)
  }
  console.log('key: ', keySelected)

  return (
    <>
      <HeaderComponent isHiddenSearch isHiddenCart />
      <div style={{ display: 'flex' }}>
        <Menu
          mode="inline"
          selectedKeys={[keySelected]}
          style={{ width: 256, boxShadow: '1px 1px 2px #ccc' }}
          items={items}
          onClick={handleOnClick}
        />
        <div style={{ flex: 1, padding: '16px' }}>
          {renderPage(keySelected)}
        </div>
      </div>
    </>
  )
}

export default AdminPage
