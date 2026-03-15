import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../types/user';

const initialState: User = {
  id: null,
  fullName: '',
  email: '',
  phone: '',
  jobType: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<User>) {
      state.id = payload.id;
      state.fullName = payload.fullName;
      state.email = payload.email;
      state.phone = payload.phone;
      state.jobType = payload.jobType;
    },

    deleteUser(state) {
      state.id = initialState.id;
      state.fullName = initialState.fullName;
      state.email = initialState.email;
      state.phone = initialState.phone;
      state.jobType = initialState.jobType;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
