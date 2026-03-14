import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type UserPersonalData = {
  id: string | null;
};

const initialState: UserPersonalData = {
  id: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setId(state, { payload }: PayloadAction<{ id: string | null }>) {
      state.id = payload.id;
    },
  },
});

export const { setId } = userSlice.actions;
export default userSlice.reducer;
