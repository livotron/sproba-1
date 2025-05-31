import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { fetchLeadersCall } from "./leadersApi";

export interface Leader {
  name: string;
  score: number;
  supporters?: Leader[];
}

interface LeaderSliceState {
  loading: boolean;
  leaders: Leader[];
  error?: string;
}

const initialState: LeaderSliceState = {
  loading: false,
  leaders: [],
  error: undefined,
};

const leadersSlice = createSlice({
  name: "leaders",
  initialState,
  reducers: {
    fetchLeadersStart(state) {
      state.loading = true;
      state.error = undefined;
    },
    fetchLeadersSuccess(state, action: PayloadAction<Leader[]>) {
      state.loading = false;
      state.leaders = action.payload;
      state.error = undefined;
    },
    fetchLeadersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setLeaders(state, action: PayloadAction<Leader[]>) {
      state.leaders = action.payload;
    },
  },
});

// Fake API call to fetch leaders
export const fetchLeaders = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchLeadersStart());
    // Simulate API delay

    // Dummy data
    const dummyLeaders = await fetchLeadersCall()
    
    dispatch(fetchLeadersSuccess(dummyLeaders));
  } catch (e) {
    dispatch(fetchLeadersFailure("Failed to fetch leaders"));
  }
};

export const {
  fetchLeadersStart,
  fetchLeadersSuccess,
  fetchLeadersFailure,
  setLeaders,
} = leadersSlice.actions;

export default leadersSlice.reducer;