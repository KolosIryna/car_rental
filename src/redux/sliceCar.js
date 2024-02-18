import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestCar } from '../services/api';

const initialState = {
  items: [],
  favorites: [],
  isLoading: false,
  error: null,
};

export const fetchCar = createAsyncThunk(
  'adverts/getAll',
  async (_, thunkAPI) => {
    try {
      const car = await requestCar();
      return car;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const carSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCar.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilter } = carSlice.actions;
export const carReducer = carSlice.reducer;
