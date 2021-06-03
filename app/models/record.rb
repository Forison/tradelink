# frozen_string_literal: true

class Record < ApplicationRecord # :nodoc:
  belongs_to :user
  validates :winner, presence: true
  scope :user_wins, ->(current_user) { where(winner: current_user).size }
end
