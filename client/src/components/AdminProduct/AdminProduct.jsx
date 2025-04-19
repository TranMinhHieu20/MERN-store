import React, { useEffect, useState } from 'react'
import { WrapperHeader } from './styleAdminProduct'
import { Button, Form, Modal } from 'antd'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'
import InputComponent from '../InputComponent/InputComponent'
import * as ProductService from '../../Services/ProductService'
import { useMutationHook } from '../../hooks/useMutationHook'
import Loading from '../../components/Loading/Loading'
import * as message from '../../components/Message/Message'
import { useQuery } from '@tanstack/react-query'

function AdminProduct() {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [stateProduct, setStateProduct] = useState({
    name: '',
    type: '',
    countInStock: '',
    price: '',
    rating: '',
    description: '',
    image: null,
    preViewImage: null
  })
  const [isSpinLoading, setIsSpinLoading] = useState(false)

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

  const getAllProduct = async () => {
    const res = await ProductService.getAllProduct()
    return res
  }
  const { data } = mutation
  const { isLoading: isLoadingProduct, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProduct,
    retry: 3,
    retryDelay: 1000
  })

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
        />
      </div>
    )
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
      // render: (text) => <a>{text}</a>
    },
    {
      title: 'Price',
      dataIndex: 'price'
    },
    {
      title: 'Rating',
      dataIndex: 'rating'
    },
    {
      title: 'Type',
      dataIndex: 'type'
    },
    {
      title: 'Description',
      dataIndex: 'description'
    },
    {
      title: 'Image',
      dataIndex: 'image'
    },
    {
      title: 'CountInStock',
      dataIndex: 'countInStock'
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

  const handleCancel = () => {
    setIsModalOpen(false)
    form.resetFields()
  }

  console.log('Mutation.status: ', data?.status)
  console.log('Mutation.message: ', data?.message)
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

  const onFinish = () => {
    mutation.mutate(stateProduct)

    console.log('first: ', stateProduct)
  }
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
          <PlusOutlined
            title="Create products new"
            style={{ fontSize: '50px' }}
          />
        </Button>
        <div style={{ marginTop: '20px' }}>
          <TableComponent
            columns={columns}
            data={dataTable}
            products={products?.data}
            isLoading={isLoadingProduct}
          />
        </div>
      </div>
      <Modal
        title="Tạo sản phẩm"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
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
          <Form.Item
            label="Name"
            name="Name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <InputComponent
              value={stateProduct?.name}
              onChange={handleOnChangeName}
            />
          </Form.Item>
          <Form.Item
            label="Type"
            name="Type"
            rules={[{ required: true, message: 'Please input your type!' }]}
          >
            <InputComponent
              value={stateProduct?.type}
              onChange={handleOnChangeType}
            />
          </Form.Item>
          <Form.Item
            label="CountInStock"
            name="CountInStock"
            rules={[
              { required: true, message: 'Please input your countInStock!' }
            ]}
          >
            <InputComponent
              value={stateProduct?.countInStock}
              onChange={handleOnChangeCountInStock}
            />
          </Form.Item>
          <Form.Item
            label="Price"
            name="Price"
            rules={[{ required: true, message: 'Please input your price!' }]}
          >
            <InputComponent
              value={stateProduct?.price}
              onChange={handleOnChangePrice}
            />
          </Form.Item>
          <Form.Item
            label="Rating"
            name="Rating"
            rules={[{ required: true, message: 'Please input your rating!' }]}
          >
            <InputComponent
              value={stateProduct?.rating}
              onChange={handleOnChangeRating}
            />
          </Form.Item>
          <Form.Item
            label="Description"
            name="Description"
            rules={[
              { required: true, message: 'Please input your description!' }
            ]}
          >
            <InputComponent
              value={stateProduct?.description}
              onChange={handleOnChangeDescription}
            />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[{ required: true, message: 'Please select an image!' }]}
          >
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
          {data?.status === 'Err' && (
            <div style={{ color: 'red', margin: '10px 100px' }}>
              {data?.message}
            </div>
          )}

          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ position: 'absolute', right: 0 }}
            >
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
      </Modal>
    </div>
  )
}

export default AdminProduct
