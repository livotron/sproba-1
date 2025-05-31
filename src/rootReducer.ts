import { combineReducers } from '@reduxjs/toolkit';

// Import your feature reducers here
// import associatesReducer from './features/associates/associatesSlice';
import leadersReducer from './features/leaders/leadersSlice';
const rootReducer = combineReducers({
  leaders: leadersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
