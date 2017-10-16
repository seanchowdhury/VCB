export const createPost = (post) => {
  return $.ajax({
    type: 'POST',
    url: '/api/posts',
    data: {post}
  })
}

export const editPost = (post) => {
  return $.ajax({
    type: 'PATCH',
    url: `api/posts/${post.id}`,
    data: {post}
  })
}

export const deletePost = (post) => {
  return $.ajax({
    type: 'DELETE',
    url: `api/posts/${post.id}`
  })
}

export const requestPost = (postId) => {
  return $.ajax({
    type: 'GET',
    url: `api/posts/${postId}`
  })
}

export const requestPosts = (postId, offset) => {
  return $.ajax({
    type: 'GET',
    url: `api/posts`,
    data: {postId, offset}
  })
}
