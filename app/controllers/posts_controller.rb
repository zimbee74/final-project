class PostsController < ApplicationController


  before_action :check_if_logged_in

  skip_before_action :verify_authenticity_token

  def latest
    render json: Post.all.reverse_order.limit(10)
  end

  def show
    render(json: Post.find(params[:id]), include: {
      comments: {
        include: {
          user: {
            only: [:name, :image]
          }
        }
      }
    })
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

  def update
    post = Post.find(params[:id])
    post.update(
      heading: params[:heading],
      content: params[:content],
      image: params[:image],
    )

    # TODO: error handling in case of validation error, etc!
    render json: post

  end

end
