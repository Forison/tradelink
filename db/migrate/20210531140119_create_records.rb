# frozen_string_literal: true

class CreateRecords < ActiveRecord::Migration[6.1] # :nodoc:
  def change
    create_table :records do |t|
      t.references :user, null: false, foreign_key: true
      t.string :opponent
      t.string :winner

      t.timestamps
    end
  end
end
