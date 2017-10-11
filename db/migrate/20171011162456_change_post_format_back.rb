class ChangePostFormatBack < ActiveRecord::Migration
  def change
    change_column :posts, :body, :text, using: 'body::text'
  end
end
