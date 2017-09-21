export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: {post}
  })
}

export const editPost = (post) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/posts/${post.id}`,
    data: {post}
  })
}

export const deletePost = (post) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${post.id}`
  })
}

export const requestPosts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts'
  })
}

export const requestPost = (post) => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${post}`
  })
}
