import React, { useEffect, useRef, useState } from 'react'
import { WrapperHeader } from './styleAdminProduct'
import { Button, Form, Modal, Space } from 'antd'
import { DeleteOutlined, EditOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'
import InputComponent from '../InputComponent/InputComponent'
import * as ProductService from '../../Services/ProductService'
import { useMutationHook } from '../../hooks/useMutationHook'
import Loading from '../../components/Loading/Loading'
import * as message from '../../components/Message/Message'
import { useQuery } from '@tanstack/react-query'
import DrawerComponent from '../DrawerComponent/DrawerComponent'
import { useSelector } from 'react-redux'
import ModalComponent from '../ModalComponent/ModalComponent'

function AdminProduct() {
  const [rowSelected, setRowSelected] = useState('')
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  //
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef(null)
  //

  const [stateProduct, setStateProduct] = useState({
    name: '',
    type: '',
    countInStock: '',
    price: '',
    rating: '',
    description: '',
    image: null,
    previewImage: null
  })
  const [stateProductDetails, setStateProductDetails] = useState({
    name: '',
    type: '',
    countInStock: '',
    price: '',
    rating: '',
    description: '',
    image: null,
    previewImage: null
  })
  const [isSpinLoading, setIsSpinLoading] = useState(false)
  const [isSpinLoadingUpdate, setIsSpinLoadingUpdate] = useState(false)
  const user = useSelector((state) => state?.user)
  console.log(user)
  const mutation = useMutationHook((data) => {
    const { name, type, countInStock, price, rating, description, image } = data
    return ProductService.createProduct({
      name,
      type,
      countInStock,
      price,
      rating,
      description,
      image
    })
  })
  const mutationUpdate = useMutationHook((data) => {
    console.log('data: ', data)
    const { id, token, ...rests } = data
    const res = ProductService.updateProduct(id, token, { ...rests })
    return res
  })
  const mutationDeleted = useMutationHook((data) => {
    console.log('data: ', data)
    const { id, token } = data
    const res = ProductService.deleteProduct(id, token)
    return res
  })

  const getAllProduct = async () => {
    const res = await ProductService.getAllProduct()
    return res
  }
  const { data } = mutation
  const { data: dataUpdate } = mutationUpdate
  const { data: dataDeleted } = mutationDeleted
  console.log('dataDeleted: ', dataDeleted)
  console.log('mutation: Update', dataUpdate)
  const queryProduct = useQuery({
    queryKey: ['products'],
    queryFn: getAllProduct,
    retry: 3,
    retryDelay: 1000
  })
  const { isLoading: isLoadingProduct, data: products } = queryProduct
  const fetchGetDetailsProduct = async (rowSelected) => {
    const res = await ProductService.getDetailsProduct(rowSelected)
    if (res?.data) {
      setStateProductDetails({
        name: res?.data?.name,
        type: res?.data?.type,
        countInStock: res?.data?.countInStock,
        price: res?.data?.price,
        rating: res?.data?.rating,
        description: res?.data?.description
        // image: res?.data?.image,
        // previewImage: res?.data?.image
      })
    }
  }
  useEffect(() => {
    form.setFieldsValue(stateProductDetails)
  }, [form, stateProductDetails])
  useEffect(() => {
    if (rowSelected) {
      fetchGetDetailsProduct(rowSelected)
    }
  }, [rowSelected])

  const handleDetailsProduct = () => {
    if (rowSelected) {
      setIsSpinLoadingUpdate(true)
      setTimeout(() => {
        setIsSpinLoadingUpdate(false)
      }, 1500)
      setIsOpenDrawer(true)
      fetchGetDetailsProduct(rowSelected)
    }
  }

  const renderAction = () => {
    return (
      <div style={{ fontSize: '20px' }}>
        <EditOutlined
          title="edit"
          style={{
            color: 'rgb(26, 148, 255)',
            cursor: 'pointer',
            padding: '5px'
          }}
          onClick={handleDetailsProduct}
        />
        <span></span>
        <DeleteOutlined
          title="Delete"
          style={{
            color: 'rgb(255, 53, 26)',
            cursor: 'pointer',
            padding: '5px',
            marginLeft: '5px'
          }}
          onClick={() => setIsModalOpenDelete(true)}
        />
      </div>
    )
  }
  //
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }
  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText('')
  }
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <InputComponent
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false })
              setSearchText(selectedKeys[0])
              setSearchedColumn(dataIndex)
            }}
          >
            Filter
          </Button> */}
          <Button
            type="link"
            size="small"
            onClick={() => {
              close()
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => {
            var _a
            return (_a = searchInput.current) === null || _a === void 0 ? void 0 : _a.select()
          }, 100)
        }
      }
    }
    // render: (text) =>
    //   searchedColumn === dataIndex ? (
    //     <Highlighter
    //       highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
    //       searchWords={[searchText]}
    //       autoEscape
    //       textToHighlight={text ? text.toString() : ''}
    //     />
    //   ) : (
    //     text
    //   )
  })
  //

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      // render: (text) => <a>{text}</a>
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps('name')
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
      filters: [
        {
          text: '>= 50',
          value: '>='
        },
        {
          text: '<= 50',
          value: '<='
        }
      ],
      onFilter: (value, record) => {
        if (value === '>=') {
          return record.price >= 50
        } else {
          return record.price <= 50
        }
      }
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      sorter: (a, b) => a.rating - b.rating,
      filters: [
        {
          text: '>= 3',
          value: '>='
        },
        {
          text: '<= 3',
          value: '<='
        }
      ],
      onFilter: (value, record) => {
        if (value === '>=') {
          return record.price >= 3
        } else {
          return record.price <= 3
        }
      }
    },
    {
      title: 'Type',
      dataIndex: 'type'
    },
    {
      title: 'Description',
      dataIndex: 'description'
    },
    // {
    //   title: 'Image',
    //   dataIndex: 'image'
    // },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (image) => <img src={image} alt="product" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
    },
    {
      title: 'CountInStock',
      dataIndex: 'countInStock',
      sorter: (a, b) => a.countInStock - b.countInStock
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: renderAction
    }
  ]

  const dataTable =
    products?.data?.length &&
    products?.data?.map((product) => {
      return { ...product, key: product?._id }
    })

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancelDelete = () => {
    setIsModalOpenDelete(false)
  }

  console.log('rowSelected', rowSelected)
  console.log('user?.access_token', user?.access_token)
  const handleDeleteProduct = () => {
    mutationDeleted.mutate(
      { id: rowSelected, token: user?.access_token },
      {
        onSettled: () => {
          queryProduct.refetch()
        }
      }
    )
    console.log('oke')
    setIsModalOpenDelete(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    form.resetFields()
  }
  const handleCancelUpdate = () => {
    setIsModalOpen(false)
    // form.resetFields()
  }

  useEffect(() => {
    if (data?.status === 'Ok') {
      setIsSpinLoading(true)
      setTimeout(() => {
        setIsSpinLoading(false)
        handleCancel()
        form.resetFields()
        setStateProduct({
          name: '',
          type: '',
          countInStock: '',
          price: '',
          rating: '',
          description: '',
          image: null,
          preViewImage: null
        })
        message.success(data?.message)
      }, 2000)
    }
    // eslint-disable-next-line
  }, [data?.status])
  //
  useEffect(() => {
    if (dataUpdate?.status === 'Ok') {
      setIsSpinLoadingUpdate(true)
      setTimeout(() => {
        setIsSpinLoadingUpdate(false)
        handleCancelUpdate()
        message.success(dataUpdate?.message)
      }, 2000)
    }
    // eslint-disable-next-line
  }, [dataUpdate?.status])
  useEffect(() => {
    if (dataDeleted?.status === 'Ok') {
      // setIsSpinLoadingUpdate(true)
      setTimeout(() => {
        // setIsSpinLoadingUpdate(false)
        handleCancelDelete()
        message.success(dataDeleted?.message)
      }, 2000)
    }
    // eslint-disable-next-line
  }, [dataDeleted?.status])

  const onFinish = () => {
    mutation.mutate(stateProduct, {
      onSettled: () => {
        queryProduct.refetch()
      }
    })
  }
  const onUpdateProduct = () => {
    mutationUpdate.mutate(
      {
        id: rowSelected,
        token: user?.access_token,
        ...stateProductDetails
      },
      {
        onSettled: () => {
          queryProduct.refetch()
        }
      }
    )
  }
  console.log('token: ', user?.access_token, rowSelected, stateProductDetails)
  const handleOnChangeName = (e) => {
    setStateProduct({ ...stateProduct, name: e.target.value })
  }
  const handleOnChangeType = (e) => {
    setStateProduct({ ...stateProduct, type: e.target.value })
  }
  const handleOnChangeCountInStock = (e) => {
    setStateProduct({ ...stateProduct, countInStock: e.target.value })
  }
  const handleOnChangePrice = (e) => {
    setStateProduct({ ...stateProduct, price: e.target.value })
  }
  const handleOnChangeRating = (e) => {
    setStateProduct({ ...stateProduct, rating: e.target.value })
  }
  const handleOnChangeDescription = (e) => {
    setStateProduct({ ...stateProduct, description: e.target.value })
  }

  const handleChangeImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setStateProduct({
        ...stateProduct,
        image: previewUrl, // Gửi đường dẫn chuỗi của ảnh
        previewImage: previewUrl
      })
    }
  }
  const handleOnChangeNameDetails = (e) => {
    setStateProductDetails({ ...stateProductDetails, name: e.target.value })
  }
  const handleOnChangeTypeDetails = (e) => {
    setStateProductDetails({ ...stateProductDetails, type: e.target.value })
  }
  const handleOnChangeCountInStockDetails = (e) => {
    setStateProductDetails({
      ...stateProductDetails,
      countInStock: e.target.value
    })
  }
  const handleOnChangePriceDetails = (e) => {
    setStateProductDetails({ ...stateProductDetails, price: e.target.value })
  }
  const handleOnChangeRatingDetails = (e) => {
    setStateProductDetails({ ...stateProductDetails, rating: e.target.value })
  }
  const handleOnChangeDescriptionDetails = (e) => {
    setStateProductDetails({
      ...stateProductDetails,
      description: e.target.value
    })
  }

  const handleChangeImageDetails = (e) => {
    const file = e.target.files[0]
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setStateProductDetails({
        ...stateProductDetails,
        image: previewUrl, // Gửi đường dẫn chuỗi của ảnh
        previewImage: previewUrl
      })
    }
  }

  return (
    <div>
      <WrapperHeader>Quản lý sản phẩm</WrapperHeader>
      <div style={{ marginTop: '10px' }}>
        <Button
          onClick={showModal}
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '6px',
            borderStyle: 'dashed'
          }}
        >
          <PlusOutlined title="Create products new" style={{ fontSize: '50px' }} />
        </Button>
        <div style={{ marginTop: '20px' }}>
          <TableComponent
            columns={columns}
            data={dataTable}
            isLoading={isLoadingProduct}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  setRowSelected(record._id)
                }
              }
            }}
          />
        </div>
      </div>
      <ModalComponent title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
            <InputComponent value={stateProduct?.name} onChange={handleOnChangeName} />
          </Form.Item>
          <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Please input your type!' }]}>
            <InputComponent value={stateProduct?.type} onChange={handleOnChangeType} />
          </Form.Item>
          <Form.Item
            label="CountInStock"
            name="countInStock"
            rules={[{ required: true, message: 'Please input your countInStock!' }]}
          >
            <InputComponent value={stateProduct?.countInStock} onChange={handleOnChangeCountInStock} />
          </Form.Item>
          <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input your price!' }]}>
            <InputComponent value={stateProduct?.price} onChange={handleOnChangePrice} />
          </Form.Item>
          <Form.Item label="Rating" name="rating" rules={[{ required: true, message: 'Please input your rating!' }]}>
            <InputComponent value={stateProduct?.rating} onChange={handleOnChangeRating} />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input your description!' }]}
          >
            <InputComponent value={stateProduct?.description} onChange={handleOnChangeDescription} />
          </Form.Item>
          <Form.Item label="Image" name="image" rules={[{ required: true, message: 'Please select an image!' }]}>
            <input type="file" onChange={handleChangeImage} />
            {stateProduct?.previewImage && (
              <img
                src={stateProduct?.previewImage}
                alt="Preview"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  marginTop: '10px'
                }}
              />
            )}
          </Form.Item>
          {data?.status === 'Err' && <div style={{ color: 'red', margin: '10px 100px' }}>{data?.message}</div>}

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" style={{ position: 'absolute', right: 0 }}>
              {isSpinLoading ? 'Creating' : 'Create'}
            </Button>
          </Form.Item>
        </Form>

        <span style={{ position: 'relative' }}>
          {isSpinLoading && (
            <span
              style={{
                position: 'fixed',
                display: 'flex',
                top: '50%',
                right: '50%'
              }}
            >
              <Loading />
            </span>
          )}
        </span>
      </ModalComponent>
      {/* xoa */}
      <ModalComponent
        title="Xóa sản phẩm"
        open={isModalOpenDelete}
        onCancel={handleCancelDelete}
        onOk={handleDeleteProduct}
      >
        <div>Bạn có chắc xóa sản phẩm này không?</div>
      </ModalComponent>
      {/*  */}
      <DrawerComponent
        title="Chi tiết sản phẩm"
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        width="50%"
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onUpdateProduct}
          autoComplete="off"
        >
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
            <InputComponent value={stateProductDetails?.name} onChange={handleOnChangeNameDetails} />
          </Form.Item>
          <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Please input your type!' }]}>
            <InputComponent value={stateProductDetails?.type} onChange={handleOnChangeTypeDetails} />
          </Form.Item>
          <Form.Item
            label="CountInStock"
            name="countInStock"
            rules={[{ required: true, message: 'Please input your countInStock!' }]}
          >
            <InputComponent value={stateProductDetails?.countInStock} onChange={handleOnChangeCountInStockDetails} />
          </Form.Item>
          <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input your price!' }]}>
            <InputComponent value={stateProductDetails?.price} onChange={handleOnChangePriceDetails} />
          </Form.Item>
          <Form.Item label="Rating" name="rating" rules={[{ required: true, message: 'Please input your rating!' }]}>
            <InputComponent value={stateProductDetails?.rating} onChange={handleOnChangeRatingDetails} />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input your description!' }]}
          >
            <InputComponent value={stateProductDetails?.description} onChange={handleOnChangeDescriptionDetails} />
          </Form.Item>
          <Form.Item label="Image" name="image" rules={[{ required: false, message: 'Please select an image!' }]}>
            <input type="file" onChange={handleChangeImageDetails} />
            {stateProductDetails?.previewImage && (
              <img
                src={stateProductDetails?.previewImage}
                alt="Preview"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  marginTop: '10px'
                }}
              />
            )}
          </Form.Item>
          {dataUpdate?.status === 'Err' && (
            <div style={{ color: 'red', margin: '10px 100px' }}>{dataUpdate?.message}</div>
          )}

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" style={{ position: 'absolute', right: 0 }}>
              {isSpinLoadingUpdate ? 'Updating' : 'Update'}
            </Button>
          </Form.Item>
        </Form>
        <span style={{ position: 'relative' }}>
          {isSpinLoadingUpdate && (
            <span
              style={{
                position: 'fixed',
                display: 'flex',
                top: '50%',
                right: '50%'
              }}
            >
              <Loading />
            </span>
          )}
        </span>
      </DrawerComponent>
    </div>
  )
}

export default AdminProduct
