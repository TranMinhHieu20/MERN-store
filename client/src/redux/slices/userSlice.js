import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  avatar: '',
  access_token: '',
  id: '',
  isAdmin: false
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const {
        name = '',
        email = '',
        access_token = '',
        phone = '',
        address = '',
        avatar = '',
        _id = '',
        isAdmin
      } = action.payload
      console.log('action.payload: ', action)
      state.name = name || email
      state.email = email
      state.phone = phone
      state.address = address
      state.avatar = avatar
      state.access_token = access_token
      state.id = _id
      state.isAdmin = isAdmin
    },
    resetUser: (state) => {
      state.name = ''
      state.email = ''
      state.phone = ''
      state.address = ''
      state.avatar = ''
      state.access_token = ''
      state.id = ''
      state.isAdmin = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
