//intente agregar esto pero no se pudo... la IA no me ayudo mucho

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSyncing: false,
  lastSyncTime: null,
  syncStatus: 'idle', // 'idle', 'syncing', 'success', 'error'
  syncError: null,
  pendingChanges: 0,
};

const syncSlice = createSlice({
  name: 'sync',
  initialState,
  reducers: {
    setSyncing: (state, action) => {
      state.isSyncing = action.payload;
      if (action.payload) {
        state.syncStatus = 'syncing';
        state.syncError = null;
      }
    },
    setSyncSuccess: (state, action) => {
      state.isSyncing = false;
      state.syncStatus = 'success';
      state.lastSyncTime = action.payload.timestamp || Date.now();
      state.syncError = null;
    },
    setSyncError: (state, action) => {
      state.isSyncing = false;
      state.syncStatus = 'error';
      state.syncError = action.payload;
    },
    resetSyncStatus: (state) => {
      state.syncStatus = 'idle';
      state.syncError = null;
    },
    setPendingChanges: (state, action) => {
      state.pendingChanges = action.payload;
    },
  },
});

export const {
  setSyncing,
  setSyncSuccess,
  setSyncError,
  resetSyncStatus,
  setPendingChanges,
} = syncSlice.actions;

export default syncSlice.reducer;
