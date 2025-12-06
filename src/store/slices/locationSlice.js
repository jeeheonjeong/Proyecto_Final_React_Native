import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLocation: null,
  lastKnownLocation: null,
  locationPermission: null,
  loading: false,
  error: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
      state.lastKnownLocation = action.payload;
      state.error = null;
    },
    setLocationPermission: (state, action) => {
      state.locationPermission = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setCurrentLocation,
  setLocationPermission,
  setLoading,
  setError,
  clearError,
} = locationSlice.actions;

export default locationSlice.reducer;
