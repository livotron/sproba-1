import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { fetchAssociateByNameCall } from "./associatesApi";

export interface Associate {
  name: string;
  score: number;
  registeredDate: string;
  supports: string;
  connections: [
    Connection | null,
    Connection | null,
    Connection | null,
    Connection | null
  ];
}

export interface Connection {
  name: string;
  score: number;
  mutual: boolean;
}

interface LeaderSliceState {
  associate: Associate;
  loading: boolean;
  error?: string;
}

const initialState: LeaderSliceState = {
  associate: {
    name: "",
    score: 0,
    registeredDate: "",
    supports: "",
    connections: [null, null, null, null],
  },
  loading: false,
  error: undefined,
};

const associatesSlice = createSlice({
  name: "associates",
  initialState,
  reducers: {
    fetchAssociateStart(state) {
      state.loading = true;
      state.error = undefined;
    },
    fetchAssociateSuccess(state, action: PayloadAction<Associate>) {
      state.loading = false;
      state.associate = action.payload;
      state.error = undefined;
    },
    fetchAssociateFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setAssociate(state, action: PayloadAction<Associate>) {
      state.associate = action.payload;
    },
  },
});

// Fake API call to fetch associate
export const fetchAssociate =
  (name: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(fetchAssociateStart());
      // Simulate API delay

      // Dummy data
      const associate = await fetchAssociateByNameCall(name);

      dispatch(fetchAssociateSuccess(associate));
    } catch (e) {
      dispatch(fetchAssociateFailure("Failed to fetch associate"));
    }
  };

export const {
  fetchAssociateStart,
  fetchAssociateSuccess,
  fetchAssociateFailure,
  setAssociate,
} = associatesSlice.actions;

export default associatesSlice.reducer;
