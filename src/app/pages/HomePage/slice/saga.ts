import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { catsActions as actions } from '.';

import { getAllCats } from './api';
const mockedsTags = [
  {
    id: '595f280c557291a9750ebf80',
    created_at: '2015-11-06T18:36:37.342Z',
    tags: ['cute', 'eyes'],
  },
  {
    id: '595f280e557291a9750ebf9f',
    created_at: '2016-10-09T12:51:24.421Z',
    tags: ['cute', 'sleeping'],
  },
  {
    id: '595f280e557291a9750ebfa6',
    created_at: '2016-11-22T15:20:31.913Z',
    tags: ['cute', 'sleeping'],
  },
  {
    id: '595f280f557291a9750ebfb6',
    created_at: '2016-11-21T22:23:06.720Z',
    tags: ['cute', 'funny', 'gif'],
  },
  {
    id: '595f280f557291a9750ebfb7',
    created_at: '2016-11-30T09:32:46.293Z',
    tags: ['computer', 'cute', 'orange'],
  },
  {
    id: '595f280f557291a9750ebfbb',
    created_at: '2016-11-22T06:47:08.956Z',
    tags: ['cute', 'ange', 'angel'],
  },
  {
    id: '595f2809557291a9750ebf31',
    created_at: '2016-04-13T14:20:46.638Z',
    tags: ['cute', 'orange'],
  },
  {
    id: '595f2809557291a9750ebf35',
    created_at: '2015-11-06T18:36:17.589Z',
    tags: ['cute'],
  },
  {
    id: '595f280c557291a9750ebf7a',
    created_at: '2016-09-22T19:49:00.710Z',
    tags: ['cute', 'sleeping', 'gif'],
  },
  {
    id: '595f280c557291a9750ebf7f',
    created_at: '2015-11-06T18:35:58.017Z',
    tags: ['cute', 'white'],
  },
];

function* fetchCatsWorker() {
  try {
    const cats = yield call(getAllCats);

    yield put(actions.fetchCatsSuccess(cats));
  } catch {
    yield put(actions.fetchCatsFail('couldnt fetch cats'));
  }
}

export function* catsSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(actions.fetchCats, fetchCatsWorker);
}
