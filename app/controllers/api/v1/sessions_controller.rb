class Api::V1::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    user = User.authenticate(params[:user][:email], params[:user][:password])
    token = User.generate_authentication_token
    if user
      if user.email_confirmed
        data = {id: user.id, email: user.email, token: token}
        render json: data, status: :ok
      else
        render json: {}, status: :ok
      end
    else
      render json: { errors: "Invalid email or password" }, status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, :notice => "Logged out!"
  end
end
