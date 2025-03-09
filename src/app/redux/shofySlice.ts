import { createSlice } from "@reduxjs/toolkit"
import { ProductType } from "../../../type";

interface InitialState {
    cart: ProductType[];
    favorite: ProductType[];
    userInfo: any;
}

const initialState: InitialState = {
    cart: [],
    favorite: [],
    userInfo: null,
}

export const shofySlice = createSlice({
    name:"shofy",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct = state?.cart?.find(
                (item) => item?.id === action.payload?.id
            );
            if(existingProduct) {
               existingProduct.quantity! += 1
            }else{
                state.cart.push({...action.payload,quantity:1});
            } 
        },
        increaseQuantity:(state,action)=>{
            const existingProduct = state?.cart?.find(
                (item) => item?.id === action.payload
            );
            if (existingProduct) {
                existingProduct.quantity! += 1;
            }
        },
        decreaseQuantity:(state,action)=>{
            const existingProduct = state?.cart?.find(
                (item) => item?.id === action.payload
            );
            if (existingProduct) {
                existingProduct.quantity! -= 1;
            }
        },
    }

});

export const { addToCart, increaseQuantity, decreaseQuantity  } = shofySlice.actions

export default shofySlice.reducer;