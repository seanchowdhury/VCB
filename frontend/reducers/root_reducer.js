import { combineReducers } from 'redux';
import SessionReducer from './session_reducer'
import ErrorsReducer from './errors_reducer'
import PostsReducer from './posts_reducer'

const rootReducer = combineReducers({
  posts: PostsReducer,
  session: SessionReducer,
  errors: ErrorsReducer
});

export default rootReducer;
