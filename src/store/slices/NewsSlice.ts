import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { $authHost, $host } from '../../http';

export type TNews = {
  news: {
    id: string;
    title: string;
    text: string;
    date: string;
    imgUrl: object;
  }[];
};

const initialState: TNews = {
  news: [],
};

// export const fetchNewsList = createAsyncThunk<any, undefined, { rejectValue: string }>(
//   'news/fetchNewsList',
//   async function (_, { rejectWithValue }) {
//     try {
//       const { data } = await $host.get('api/news');
//       return data;
//     } catch (e: any) {
//       if (!e.response) {
//         throw e;
//       }
//       return rejectWithValue('News not found');
//     }
//   },
// );

// export const fetchCreateNews = createAsyncThunk<any, FormData, { rejectValue: string }>(
//   'news/fetchCreateNews',
//   async function (news, { rejectWithValue }) {
//     try {
//       const { data } = await $authHost.post('api/news', news);
//       return data;
//     } catch (e: any) {
//       if (!e.response) {
//         throw e;
//       }
//       return rejectWithValue('News not found');
//     }
//   },
// );

const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // loginAdmin(state, action) {
    //   state.isAdmin = action.payload;
    // },
    listNews(state, action) {
      state.news = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchNewsList.fulfilled, (state, action) => {
    //   state.newsList = action.payload;
    // });
  },
});

export const { listNews } = NewsSlice.actions;
export default NewsSlice.reducer;
