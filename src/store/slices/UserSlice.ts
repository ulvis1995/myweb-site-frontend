import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { $host } from '../../http';
import jwt_decode from 'jwt-decode';
import { UserState } from '../../types/typesApi';

const initialState: UserState = {
  user: {
    email: '',
    exp: null,
    iat: null,
    id: '',
    role: 'USER',
  },
  isAdmin: false,
  token: '',
  error: undefined,
};

export const fetchUserLogin = createAsyncThunk<
  any,
  { email: string; password: string },
  { rejectValue: string }
>('user/fetchUser', async function ({ email, password }, { rejectWithValue }) {
  try {
    const { data } = await $host.post('api/user/login', { email, password });
    localStorage.setItem('token', data.token);
    const user = jwt_decode(data.token);
    const token = data.token;
    return { user, token };
  } catch (e: any) {
    if (!e.response) {
      throw e;
    }
    return rejectWithValue(e.response.data.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAdmin(state, action) {
      state.isAdmin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserLogin.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = undefined;
    });
    builder.addCase(fetchUserLogin.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { loginAdmin } = userSlice.actions;
export default userSlice.reducer;
