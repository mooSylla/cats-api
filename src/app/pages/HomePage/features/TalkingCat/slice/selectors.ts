import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.talkingCat || initialState;

export const selectTalkingCatImg = createSelector(
  [selectSlice],
  state => state.talkingCatImg,
);
export const selectLoading = createSelector(
  [selectSlice],
  state => state.loading,
);
export const selectError = createSelector([selectSlice], state => state.error);
