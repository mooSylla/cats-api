import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { talkingCatSaga } from './saga';
import { TalkingCatState } from './types';

export const initialState: TalkingCatState = {
  talkingCatImg: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'talkingCat',
  initialState,
  reducers: {
    fetchTalkingCat(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchTalkingCatSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.talkingCatImg = action.payload;
    },
    fetchTalkingCatFail(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: talkingCatActions } = slice;

export const useTalkingCatSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: talkingCatSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useTalkingCatSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
