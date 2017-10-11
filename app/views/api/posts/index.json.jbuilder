@posts.each do |post|
  author = post.author
  author_name = author.fname.capitalize + " " + author.lname.capitalize
  body = sanitize(post.body)
  json.set! post.id do
    json.extract! post, :id, :title, :author_id, :created_at
    json.body body
    json.author_name author_name
  end
end
