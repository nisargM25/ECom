import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const vendorSlice = createSlice({
    name: 'vendor',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.push(action.payload);
        },
        deleteProduct(state,action) {
            state=state.filter(item=>item.id!==action.payload)
         },
        updateProduct() { }
    }
})

export const {addProduct,deleteProduct}=vendorSlice.actions;
export default vendorSlice.reducer;