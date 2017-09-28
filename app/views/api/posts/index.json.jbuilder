@posts.each do |post|
  author = post.author
  author_name = author.fname.capitalize + " " + author.lname.capitalize
  json.set! post.id do
    json.extract! post, :id, :title, :body, :author_id, :created_at
    json.author_name author_name
  end
end
