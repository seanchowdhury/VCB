import { RECEIVE_POST, RECEIVE_POSTS } from '../actions/post_actions'

const PostsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case RECEIVE_POST:
      return merge({}, state, action.chart)
    default:
      return state
  }
}

export default PostsReducer
