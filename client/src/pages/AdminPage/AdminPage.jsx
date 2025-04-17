import React, { useState } from 'react'
import { ProductOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'

const items = [
  {
    key: 'sub1',
    icon: <UserOutlined />,
    label: 'Người dùng',
    children: [
      { key: '1', label: 'Option 1' },
      { key: '2', label: 'Option 2' },
      { key: '3', label: 'Option 3' },
      { key: '4', label: 'Option 4' }
    ]
  },
  {
    key: 'sub2',
    icon: <ProductOutlined />,
    label: 'Sản phẩm',
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub2-sub1',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' }
        ]
      }
    ]
  }
]

const getLevelKeys = (items1) => {
  const key = {}
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level
      }
      if (item.children) {
        func(item.children, level + 1)
      }
    })
  }
  func(items1)
  return key
}
const levelKeys = getLevelKeys(items)
function AdminPage() {
  const [stateOpenKeys, setStateOpenKeys] = useState(['sub2', 'sub2-sub1'])
  const [keySelected, setKeySelected] = useState('')
  const onOpenChange = (openKeys) => {
    console.log('OpenKeys: ', openKeys)
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    )
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey])
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      )
    } else {
      // close
      setStateOpenKeys(openKeys)
    }
  }
  const handleOnClick = ({ key }) => {
    setKeySelected(key)
  }
  return (
    <>
      <HeaderComponent isHiddenSearch isHiddenCart />
      <div style={{ display: 'flex' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['231']}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          style={{ width: 256 }}
          items={items}
          onClick={handleOnClick}
        />
        <div style={{ flex: 1 }}>
          {keySelected === '6' && (
            <>
              <span>Success</span>
            </>
          )}
          <span>132</span>
        </div>
      </div>
    </>
  )
}

export default AdminPage
