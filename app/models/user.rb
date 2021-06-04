# frozen_string_literal: true

class User < ApplicationRecord # :nodoc:
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :username, presence: true
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  before_save { self.email = email.downcase }

  has_many :records, dependent: :destroy

  scope :find_user, ->(email) { find_by(email: email) }
  scope :all_but_current_user, ->(current_user_id) { where.not(id: current_user_id).where(isLogin: true) }
end
