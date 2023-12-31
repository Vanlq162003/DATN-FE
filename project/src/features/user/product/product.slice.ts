import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {}
})

export const {} = productSlice.actions
export const productReducer = productSlice.reducer
