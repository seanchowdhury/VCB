class Api::PostsController < ApplicationController
  def index
    @offset = params[:offset].to_i
    if params[:postId] == "null"
      @posts = Post.order(id: :desc).limit(6)
    else
      @posts = Post.where("id < #{params[:postId]}").order(id: :desc).limit(6)
    end
    render "api/posts/index"
  end

  def show
    @post = Post.find(params['id'])
    render "api/posts/show"
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = rand(3) #current_user.id
    if @post.save
      render "api/posts/show"
    else
      render json: @post.error.messages, status: 422
    end
  end

  def update
    @post = Post.find(id)
    if @post.update(post_params)
      render "api/posts/show"
    else
      render json: @post.error.messages, status: 422
    end
  end

  def destroy
    @post = Post.find(id)
    if @post.delete
      render "api/posts/index"
    else
      render json: @post.error.messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
