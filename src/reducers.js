import { combineReducers } from 'redux';
import todoApp from './todo-app/reducer';

const rootReducer = combineReducers({
    todoApp,
});

export default rootReducer;