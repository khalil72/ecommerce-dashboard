import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async()=> {
        try{
          const response = await axios.get('https://fakestoreapi.com/products');
          return response.data;
        }
        catch(error){
            return []; 
        }
    }
);
export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (productId) => {
        try {
          await axios.delete(`https://fakestoreapi.com/products/${productId}`);
          return productId;
        } catch (error) {
          console.error('Error deleting product:', error);
          throw error; // Re-throw the error to handle it in the rejection case
        }
      }
)
export const updateProduct = createAsyncThunk('product/updateProduct',
 async (productId) => {
    try {
        await axios.update(`https://fakestoreapi.com/products/${productId}`);
    }
    catch (error) {
        return []
    }
 }
);

export const fetchProductId = createAsyncThunk(
    'product/fetchProductId',
    async (productId) => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
      }
    }
  );

const initialState = {
    loading: false,
    products: [],
    selectedProduct:null,
    error: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true;
            // console.log('data not get')
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload;
            state.loading = false;
            // console.log('data  get')
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        //delete product action

        builder.addCase(deleteProduct.pending, (state) => {
            state.loading = true;
            // console.log('delete product not get')
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.product = state.product.filter(product =>  product.id !== action.payload);
            state.loading = false;
            // console.log('delete product not get')
        });
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        //update product
        builder.addCase(updateProduct.pending, (state) => {
            state.loading = true;
            // console.log('delete product not get')
        });
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.product = state.product.filter(product =>  product.id === action.payload);
            state.loading = false;
            console.log('Current state:', state);
            console.log('Action payload:', action.payload);
            // console.log('delete product not get')
        });
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        
        //fetchproductId
        builder.addCase(fetchProductId.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(fetchProductId.fulfilled, (state, action) => {
            state.selectedProduct = action.payload;
            state.loading = false;
          });
          builder.addCase(fetchProductId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
          });

    },
});

export default productSlice.reducer;
