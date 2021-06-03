# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    sequence(:username) { |n| "tester-#{n}" }
    sequence(:email) { |n| "tester#{n}@example.com" }
    isLogin { false }
  end
end
