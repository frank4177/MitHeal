import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthType } from '../../../types';

export interface  IStore{
  registeredData: AuthType
  accessToken: string
}

const initialState: IStore = {
  registeredData: {},
  accessToken: ""
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<AuthType>) => {
      state.registeredData = action.payload
    },
    login: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
    logout: (state) => {
      state.accessToken = ""
    },
  },
});

export const {login, logout, signUp} = userSlice.actions;
export default userSlice.reducer;