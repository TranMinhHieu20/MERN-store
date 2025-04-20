import axios from 'axios'
import { axiosJWT } from './UseService'

export const getAllProduct = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL_BACKEND}/product/get-all`
  )
  return res.data
}

export const createProduct = async (data) => {
  console.log('data create product: ', data)
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL_BACKEND}/product/create`,
    data,
    {
      headers: {
        'Content-Type': 'application/json' // Đảm bảo đây là json
      }
    }
  )
  return res.data
}
export const getDetailsProduct = async (id) => {
  console.log('data create product: ', id)
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL_BACKEND}/product/get-details/${id}`,
    {
      headers: {
        'Content-Type': 'application/json' // Đảm bảo đây là json
      }
    }
  )
  return res.data
}
// export const updateProduct = async (id, access_token, data) => {
//   console.log('data create product: ', id)
//   const res = await axiosJWT.put(
//     `${process.env.REACT_APP_API_URL_BACKEND}/product/update/${id}`,
//     data,
//     {
//       headers: {
//         token: `Bearer ${access_token}`
//       }
//     }
//   )
//   return res.data
// }

export const updateProduct = async (id, access_token, data) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL_BACKEND}/product/update/${id}`,
      data,
      {
        headers: {
          token: `Bearer ${access_token}`
        }
      }
    )
    console.log('res: ', res)
    return res.data
  } catch (error) {
    console.error(
      'Lỗi khi refresh_token: ',
      error.response ? error.response.data : error
    )
    return null
  }
}
