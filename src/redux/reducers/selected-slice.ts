import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: { usersIds: string[] } = {
  usersIds: [],
};

const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    toggle(state, { payload }: PayloadAction<{ id: string }>) {
      if (state.usersIds.includes(payload.id)) {
        state.usersIds = state.usersIds.filter((id) => payload.id !== id);
      } else {
        state.usersIds.push(payload.id);
      }
    },

    deleteId(state, { payload }: PayloadAction<{ id: string }>) {
      state.usersIds = state.usersIds.filter((userId) => userId !== payload.id);
    },

    deleteAllIds(state) {
      state.usersIds = [];
    },
  },
});

export const { toggle, deleteId, deleteAllIds } = selectedSlice.actions;
export default selectedSlice.reducer;
