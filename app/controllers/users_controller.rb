# frozen_string_literal: true

class UsersController < ApplicationController # :nodoc:
  before_action :authorize, only: [:index]

  def index
    users = User.all_but_current_user(@current_user)
    render json: { record: users }, status: :ok
  end

  def create
    new_user = User.new(user_params)
    if new_user.save
      render_user_credentials(new_user)
    else
      head(:unprocessable_entity)
    end
  end

  def login
    user = User.find_by(email: params[:user][:email])
    if user
      user.update_column(:isLogin, true)
      render_user_credentials(user)
    else
      head(:unprocessable_entity)
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email)
  end

  def render_user_credentials(user)
    token = encode(user_id: user.id)
    time = Time.now + 168.hours.to_i
    render json: { token: token, user_info: user, time: time }, status: :ok
  end
end
