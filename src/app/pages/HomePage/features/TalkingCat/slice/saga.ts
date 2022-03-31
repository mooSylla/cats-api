import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { talkingCatActions as actions } from '.';
import { getTalkingCat } from './api';

function* fetchTalkingCatWorker({ payload }) {
  try {
    const catImg = yield call(getTalkingCat, payload);

    yield put(actions.fetchTalkingCatSuccess(catImg));
  } catch {
    yield put(actions.fetchTalkingCatFail('couldnt fetch cat img'));
  }
}

export function* talkingCatSaga() {
  yield takeLatest(actions.fetchTalkingCat, fetchTalkingCatWorker);
}
