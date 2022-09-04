import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URI_API } from '../consts/consts';

export const fetchImg = createAsyncThunk(
  'img/fetchImg',
  async (holiday) => {
    const res = await fetch(`${URI_API}image/${holiday}`);
    const data = await res.json();
    return data;
  }
);

export const fetchImgId = createAsyncThunk(
  'img/fetchImgId',
  async (id) => {
    const res = await fetch(`${URI_API}image/${id}`);
    const data = await res.json();
    return data;
  }
);

const imgSlice = createSlice({
  name: 'img',
  initialState: {
    urlImg: '',
    idImg: '',
    loading: '',
    error: '',
  },
  reducers: {},
  extraReducers: {
    [fetchImg.pending]: (state) => {
      state.loading = 'loading';
    },
    [fetchImg.fulfilled]: (state, action) => {
      state.loading = 'success';
      state.urlImg = action.payload.urlImg;
      state.idImg = action.payload.idImg;
    },
    [fetchImg.rejected]: (state) => {
      state.loading = 'failed';
      state.urlImg = '';
      state.idImg = '';
    },
    [fetchImgId.pending]: (state) => {
      state.loading = 'loading';
    },
    [fetchImgId.fulfilled]: (state, action) => {
      state.loading = 'success';
      state.urlImg = action.payload.urlImg;
      state.idImg = action.payload.idImg;
    },
    [fetchImgId.rejected]: (state) => {
      state.loading = 'failed';
      state.urlImg = '';
      state.idImg = '';
    },
  },
});

export default imgSlice.reducer;
