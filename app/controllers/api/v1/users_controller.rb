class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @user = User.new
  end

  # GET /users
  # GET /users.json
  def index
    @user = User.where(id: params[:where][:id][:value])
    render json: @user, status: :ok
  end

  def create
    @user = User.new(user_params)
    if @user.save
      data = {id: @user.id, email: @user.email }
      render json: { user: data }, status: :ok
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
