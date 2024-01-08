// reducers.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AppState {
  realTimeData: number[];
}

const initialState: AppState = {
  realTimeData: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateRealTimeData: (state, action: PayloadAction<number[]>) => {
      state.realTimeData = action.payload;
    },
  },
});

export const {updateRealTimeData} = appSlice.actions;

export default appSlice.reducer;
