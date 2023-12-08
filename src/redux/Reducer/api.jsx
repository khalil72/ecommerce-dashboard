import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUser = createAsyncThunk(
    'product/fetchUser',
    async()=> {
        try{
          const response = await axios.get('http://192.168.5.66/khalil/crud/display.php?api=true');
          return response.data;
        }
        catch(error){
            return []; 
        }
    }
);
export const deleteUser = createAsyncThunk(
  'api/deleteUser',
  async (userId) => {
    try {
      const response = await axios.delete(`http://192.168.5.66/khalil/crud/delete.php?id=${userId}`);
    //   const data = await response.json();
      console.log(response );
      
      return userId;
    } catch (error) {
      console.error('Error deleting user:', error);
      
    }
  }
);



const initialState = {
    loading: false,
    user:[],
}
const api = createSlice({
    name:'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.api = action.payload.records || [];
            })
            .addCase(fetchUser.rejected, (state) => {
                state.loading = false;
            });
            builder.addCase(deleteUser.pending, (state) => {
                state.loading = true;
                // console.log('delete product not get')
            });
            builder.addCase(deleteUser.fulfilled, (state, action) => {
                state.user = state.user.filter(user => user.id !== action.payload);
                state.loading = false;
                // console.log('delete product not get')
            });
            builder.addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            });
       }
})
export default api.reducer