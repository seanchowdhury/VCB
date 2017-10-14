import * as ApiUtil from '../util/posts_api_util'
import { receiveErrors } from './error_actions'

export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const receivePosts = posts => {
  return {
  type: RECEIVE_POSTS,
  posts
}}

export const createPost = (post) => dispatch => {
  return ApiUtil.createPost(post)
    .then(post => (
      dispatch(receivePost(post))),
          err => {
      return dispatch(receiveErrors(err.responseJSON))
  })
}

export const requestPosts = (postId, offset) => dispatch => {
  return ApiUtil.requestPosts(postId, offset)
    .then(posts => (
      dispatch(receivePosts(posts))
    ))
}

export const requestPost = (post) => dispatch => {
  return ApiUtil.requestPost(post)
    .then(post => (
      dispatch(receivePost(post))
    ))
}

export const editPost = (post) => dispatch => {
  return ApiUtil.editPost(post)
    .then(post => (
      dispatch(receivePost(post))
    ))
}

export const deletePost = (post) => dispatch => {
  return ApiUtil.deletePost(post)
  .then((posts) => (
    dispatch(receivePosts(posts))
  ))
}
