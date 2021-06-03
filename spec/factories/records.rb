# frozen_string_literal: true

FactoryBot.define do
  factory :record do
    user { nil }
    opponent { '' }
    winner { '' }
  end
end
