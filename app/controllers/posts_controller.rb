class PostsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def latest
    render json: Post.all.reverse_order.limit(10)
  end

  def show
    render json: Post.find(params[:id])
  end

  def create
    post = Post.create(
      heading: params[:heading],
      content: params[:content],
      image: params[:image],
      user: @current_user
    )

    if post.persisted?
      render json: post
    else
      render json: {errors: post.errors.full_messages}
    end

  end # create

end
