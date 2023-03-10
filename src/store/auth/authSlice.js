import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  deviceUniqueId: null,
  user: undefined,
  userToken: '',
  firstTimePop: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, {payload}) => {
      state.isAuth = true;
      state.user = payload.data.user;
      state.deviceUniqueId = payload.deviceUniqueId;
      state.userToken = payload.token;
    },
    firstTimePop: (state, {payload}) => {
      state.firstTimePop = payload;
    },
    logOut: (state, {payload}) => {
      state.isAuth = false;
      state.user = undefined;
      state.userToken = '';
    },
  },
});

export const {login, firstTimePop, logOut} = authSlice.actions;

export default authSlice.reducer;
