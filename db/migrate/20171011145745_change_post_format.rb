class ChangePostFormat < ActiveRecord::Migration
  def change
    change_column :posts, :body, :json, using: 'body::JSON'
  end
end
