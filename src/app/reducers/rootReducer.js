import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { reducer as ToastrReducer } from 'react-redux-toastr';
import testReducer from '../../features/testArea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import modalReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';

const rootReducer = combineReducers ({
  test: testReducer,
  events: eventReducer,
  form: formReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: ToastrReducer
});

export default rootReducer;
