import { combineReducers } from 'redux';
import article from './article';

const rootReducer = combineReducers({
  article,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
