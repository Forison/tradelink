# frozen_string_literal: true

class Record < ApplicationRecord # :nodoc:
  belongs_to :user
  validates :winner, presence: true
end
