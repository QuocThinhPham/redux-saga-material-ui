import {
   fork,
   take,
   call,
   put,
   delay,
   takeLatest,
   takeEvery,
   select
} from 'redux-saga/effects';
import { getList, addTask } from './../apis/tasks';
import * as taskTypes from './../constants/tasks';
import { STATUSES, STATUS_CODE } from './../constants';
import {
   fetchListTask,
   fetchListTaskSuccess,
   fetchListTaskFailed,
   filterTaskSuccess,
   addTaskSuccess,
   addTaskFailed
} from './../actions/tasks';
import { showLoading, hideLoading } from './../actions/ui';
import { hideModal } from './../actions/modal';

function* fetchListTaskAction() {
   while (true) {
      const action = yield take(taskTypes.FETCH_TASKS);
      yield put(showLoading());
      const { params } = action.payload;
      const resp = yield call(getList, params);
      const { status, data } = resp;
      if(status === STATUS_CODE.SUCCESS)
         yield put(fetchListTaskSuccess(data));
      else
         yield put(fetchListTaskFailed());

      yield delay(500);
      yield put(hideLoading());
   }
}

function* filterTaskSaga({ payload }) {
   yield delay(700);
   const { keyword } = payload;
   yield put(fetchListTask({
      q: keyword,
   }));

   // const { keyword } = payload;
   // const list = yield select(state => state.tasks.listTask);
   // const filteredTask = list.filter(task =>
   //    task.title.toLowerCase().includes(keyword.trim().toLowerCase())
   // );

   // yield put(filterTaskSuccess(filteredTask));
}

function* addTaskSaga({ payload }) {
   yield put(showLoading());

   const { title, desc } = payload;
   const resp = yield call(addTask, {
      title,
      desc,
      status: STATUSES[0].value
   });
   const { status, data } = resp;
   if(status === STATUS_CODE.CREATED) {
      yield put(addTaskSuccess(data));
      yield put(hideModal());
   }
   else
      yield put(addTaskFailed());

   yield delay(800);
   yield put(hideLoading());
}

function* rootSaga() {
   yield fork(fetchListTaskAction);
   yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
   yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
}

export default rootSaga;
