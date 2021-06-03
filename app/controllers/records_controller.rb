# frozen_string_literal: true

class RecordsController < ApplicationController # :nodoc:
  before_action :authorize

  def index
    render json: { record: Record.user_wins(@current_user.username) }, status: :ok
  end

  def create
    record = @current_user.records.build(record_params)
    if record.save
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  private

  def record_params
    params.require(:record).permit(:opponent, :winner)
  end
end
