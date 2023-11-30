import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GroupWithoutId } from '../types/Group';

export interface AddGroupsContext {
  groups: GroupWithoutId[];
}

const initialState: AddGroupsContext = {
  groups: []
};

const addGroupsSlice = createSlice({
  name: 'addGroupsSlice',
  initialState,
  reducers: {
    addGroup(state, action: PayloadAction<GroupWithoutId>) {
      state.groups.push(action.payload);
    },
    removeGroup(state, action: PayloadAction<GroupWithoutId>) {
      const index = state.groups.findIndex(
        (group) =>
          group.category === action.payload.category &&
          group.gender === action.payload.gender &&
          group.type === action.payload.type
      );

      if (index >= 0) {
        state.groups.splice(index, 1);
      }
    },
    resetGroups(state) {
      state.groups = [];
    }
  }
});

export const { addGroup, removeGroup, resetGroups } = addGroupsSlice.actions;
export default addGroupsSlice.reducer;
