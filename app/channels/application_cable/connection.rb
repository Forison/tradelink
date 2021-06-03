# frozen_string_literal: true

module ApplicationCable # :nodoc:
  class Connection < ActionCable::Connection::Base # :nodoc:
    identified_by :current_user

    def connect
      self.current_user = User.find_by(id: cookies.signed[:user_id])
    end
  end
end
