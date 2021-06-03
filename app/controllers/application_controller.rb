# frozen_string_literal: true

class ApplicationController < ActionController::Base # :nodoc:
  protect_from_forgery with: :null_session
  include JsonWebToken
  def authorize
    token = request.headers['Authorization'].split(' ').last if request.headers['Authorization']
    error_handler(token)
  end

  private

  def error_handler(token)
    decoded_token = decode(token)
    @current_user = User.find(decoded_token[:user_id])
    cookies.signed[:user_id] = @current_user.id
  rescue ActiveRecord::RecordNotFound => e
    render json: { errors: e.message }, status: :unauthorized
  rescue JWT::DecodeError => e
    render json: { errors: e.message }, status: :unauthorized
  end
end
