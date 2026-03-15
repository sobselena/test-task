import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  jobType: 'all',
};
const jobTypeSlice = createSlice({
  name: 'jobType',
  initialState,
  reducers: {
    setJobType(state, { payload }: PayloadAction<{ jobType: string }>) {
      state.jobType = payload.jobType;
    },
  },
});
export const { setJobType } = jobTypeSlice.actions;
export default jobTypeSlice.reducer;
