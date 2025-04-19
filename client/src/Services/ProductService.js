import axios from 'axios'

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
