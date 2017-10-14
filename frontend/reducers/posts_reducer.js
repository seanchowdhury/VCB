import { RECEIVE_POST, RECEIVE_POSTS } from '../actions/post_actions'
import { merge } from 'lodash'

const PostsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, action.posts)
    case RECEIVE_POST:
      return merge({}, state, action.post)
    default:
      return state
  }
}

export default PostsReducer
