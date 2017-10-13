scrubber = Loofah::Scrubber.new do |node|
  node.remove if node.name == 'script'
end

@posts.each do |post|
  author = post.author
  author_name = author.fname.capitalize + " " + author.lname.capitalize
  body = sanitize(post.body, scrubber: scrubber)
  debugger
  json.set! post.id do
    json.extract! post, :id, :title, :author_id, :created_at
    json.body body
    json.author_name author_name
  end
end
