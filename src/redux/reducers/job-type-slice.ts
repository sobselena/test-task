import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type JobTypeState = {
  jobType: string;
  allTypes: string[];
};
const initialState: JobTypeState = {
  jobType: 'All',
  allTypes: [],
};
const jobTypeSlice = createSlice({
  name: 'jobType',
  initialState,
  reducers: {
    setJobType(state, { payload }: PayloadAction<{ jobType: string }>) {
      state.jobType = payload.jobType;
    },
    setAllTypes(state, { payload }: PayloadAction<{ allTypes: string[] }>) {
      state.allTypes = [...payload.allTypes];
    },
  },
});
export const { setJobType, setAllTypes } = jobTypeSlice.actions;
export default jobTypeSlice.reducer;
