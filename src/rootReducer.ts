import { combineReducers } from '@reduxjs/toolkit';

// Import your feature reducers here
// import associatesReducer from './features/associates/associatesSlice';

const rootReducer = combineReducers({
  // associates: associatesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
