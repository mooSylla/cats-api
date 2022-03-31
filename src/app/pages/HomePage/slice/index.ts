import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { catsSaga } from './saga';
import { CatsState } from './types';

export const initialState: CatsState = {
  loading: false,
  cats: [],
  error: null,
};

const slice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    fetchCats(state) {
      state.loading = true;
    },
    fetchCatsSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.cats = action.payload;
    },
    fetchCatsFail(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: catsActions } = slice;

export const useCatsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: catsSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useCatsSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
