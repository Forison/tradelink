# frozen_string_literal: true

class AddIsLoginToUsers < ActiveRecord::Migration[6.1] # :nodoc:
  def change
    add_column :users, :isLogin, :boolean, default: false
  end
end
