import { takeEvery } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import request from 'utils/request';
import {
  tasksLoaded,
  tasksLoadingError
} from './actions';
import {
  LOAD_TASKS
} from './constants';

export function* getTasks() {
  // Select username from store
  const requestURL = `http://localhost:4000/todos`;

  const repos = yield call(request, requestURL);
  if (!repos.err) {
    yield put(tasksLoaded(repos.data));
  } else {
    yield put(tasksLoadingError(repos.err));
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(LOAD_TASKS, getTasks)
}

// Your sagas for this container
export default [
  watchIncrementAsync,
];