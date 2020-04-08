import * as taskConstants from './../constants/tasks';
import * as toastError from './../commons/Helpers/toastHelper';

const initialState = {
   listTask: [],
};

const reducer = (state = initialState, action) => {
   var data = [];
   switch(action.type) {
      case taskConstants.FETCH_TASKS:
         return {
            ...state,
            listTask: [],
         }

      case taskConstants.FETCH_TASKS_SUCCESS:
         ({ data } = action.payload);
         return {
            ...state,
            listTask: data,
         }

      case taskConstants.FETCH_TASKS_FAILED:
         var { error } = action.payload;
         console.log(error);
         return {
            ...state,
            listTask: [],
         }

      case taskConstants.FILTER_TASK_SUCCESS:
         ({ data } = action.payload);
         return {
            ...state,
            listTask: data,
         }

      case taskConstants.ADD_TASK:
         return {
            ...state
         }

      case taskConstants.ADD_TASK_SUCCESS:
         ({ data } = action.payload);
         return {
            ...state,
            listTask: [data].concat(state.listTask)
         }

      case taskConstants.ADD_TASK_FAILED:
         ({ error } = action.payload);
         toastError(error);
         return {
            ...state,
            listTask: state.listTask.concat([data])
         }

      default: return state;
   }
}

export default reducer;
