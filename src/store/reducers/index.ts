import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ISenorData {
  id: string;
  timestamp: number;
  data: number;
}

interface AppState {
  realTimeData: ISenorData[];
}

const initialState: AppState = {
  realTimeData: [],
};

const appSlice = createSlice({
  name: 'realtimedata',
  initialState,
  reducers: {
    updateRealTimeData: (state, action: PayloadAction<ISenorData[]>) => {
      state.realTimeData = [...action.payload];
    },
  },
});

export const {updateRealTimeData} = appSlice.actions;

export default appSlice.reducer;
