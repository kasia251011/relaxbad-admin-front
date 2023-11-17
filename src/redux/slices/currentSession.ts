import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';
export type CreateLeagueStep =
  | 'CREATE_LEAGUE'
  | 'CREATE_GROUPS'
  | 'START_REGISTRATION'
  | 'SUBMIT_PLAYERS';

export interface CurrentSessionContext {
  createLeagueStep: CreateLeagueStep;
}

const initialState: CurrentSessionContext = {
  createLeagueStep: 'CREATE_LEAGUE'
};

const currentSessionSlice = createSlice({
  name: 'currentSession',
  initialState,
  reducers: {
    setCreateLeagueStep(state, action: PayloadAction<CreateLeagueStep>) {
      state.createLeagueStep = action.payload;
    }
  }
});

export const { setCreateLeagueStep } = currentSessionSlice.actions;
export default currentSessionSlice.reducer;
