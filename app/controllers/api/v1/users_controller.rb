class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @user = User.new
  end

  # GET /users
  # GET /users.json
  def index
    @user = User.where(id: params[:where][:id][:value])
    render json: @user, each_serializer: UserSerializer, status: :ok
  end

  def create
    @user = User.new(user_params)
    if @user.save
      UserMailer.registration_confirmation(@user).deliver
      data = {id: @user.id, email: @user.email }
      render json: { user: data }, status: :ok
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  def confirm_email
    user = User.find_by_confirm_token(params[:id])
    if user
      user.email_activate
      redirect_to '/user/profile/new'
    else
      render json: { errors: "Sorry. User does not exist" }, status: :ok
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
