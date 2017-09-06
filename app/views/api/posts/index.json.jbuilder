author = @post.author

json.set! @post.id do
  json.extract! @post, :id, :title, :body, :author_id
  json.author_fname author.fname
  json.author_lname author.lname
end
