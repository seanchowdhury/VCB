class Post < ActiveRecord::Base
  validates_presence_of :author_id, :title, :body

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id
end
