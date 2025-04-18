import React, { useState } from 'react'
import { Col, Badge, Popover } from 'antd'
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
  WrapperContextInfoUser,
  WrapperLoading
} from './style'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as UserService from '../../Services/UseService'
import { resetUser } from '../../redux/slices/userSlice'
import Loading from '../../components/Loading/Loading'

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  console.log('user state: ', user)
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }
  const handleLogout = async () => {
    setIsLoading(true)
    await UserService.logoutUser()
    localStorage.removeItem('access_token')
    setTimeout(() => {
      dispatch(resetUser())
      navigate('/')
      setIsLoading(false)
    }, 1500)
  }
  const content = (
    <div>
      <WrapperContextInfoUser onClick={() => navigate('/profile-user')}>
        Thông tin người dùng
      </WrapperContextInfoUser>
      {user?.isAdmin && (
        <WrapperContextInfoUser onClick={() => navigate('/system/admin')}>
          Quản lý hệ thống
        </WrapperContextInfoUser>
      )}
      <WrapperContextInfoUser onClick={handleLogout}>
        Đăng xuất
      </WrapperContextInfoUser>
    </div>
  )
  return (
    <div style={{}}>
      <WrapperHeader gutter={0}>
        <Col span={6}>
          <WrapperTextHeader>LOGO</WrapperTextHeader>
        </Col>
        <Col span={12} style={{ gap: 12 }}>
          {!isHiddenSearch && (
            <ButtonInputSearch
              size="large"
              placeholder="input search text"
              textButton="Tìm kiếm"
            />
          )}
        </Col>
        <Col span={6} style={{ display: 'flex', gap: 10 }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: 22, marginLeft: 10 }} />
            {user?.name ? (
              <>
                <Popover placement="bottom" content={content}>
                  <div>
                    <div style={{ fontSize: 14, cursor: 'pointer' }}>
                      {user?.name || user?.email}
                    </div>
                  </div>
                </Popover>
              </>
            ) : (
              <div onClick={handleNavigateLogin}>
                <WrapperTextHeaderSmall onClick={() => navigate('/sign-in')}>
                  Đăng nhập/Đăng ký
                </WrapperTextHeaderSmall>
                <WrapperTextHeaderSmall></WrapperTextHeaderSmall>

                <div>
                  <span style={{ fontSize: 14, cursor: 'pointer' }}>
                    Tài Khoản
                  </span>
                  <CaretDownOutlined />
                </div>
              </div>
            )}
          </WrapperHeaderAccount>
          {!isHiddenCart && (
            <div
              style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}
            >
              <Badge
                count={1000}
                overflowCount={999}
                size="small"
                style={{ fontSize: '10px' }}
              >
                <ShoppingCartOutlined style={{ fontSize: 24, color: '#fff' }} />
              </Badge>
              <WrapperTextHeaderSmall style={{ marginTop: 11 }}>
                Giỏ hàng
              </WrapperTextHeaderSmall>
            </div>
          )}
        </Col>
      </WrapperHeader>
      <WrapperLoading>{isLoading && <Loading />}</WrapperLoading>
    </div>
  )
}

export default HeaderComponent
