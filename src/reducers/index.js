import { combineReducers } from 'redux';
import tasksReducer from './tasks';
import uiReducer from './ui';
import modalReducer from './modal';
import { reducer as formReducer } from 'redux-form';

const rootReducers = combineReducers({
   tasks : tasksReducer,
   ui : uiReducer,
   modal : modalReducer,
   form : formReducer
});

export default rootReducers;
