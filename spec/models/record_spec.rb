# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Record, type: :model do
  describe 'associations of record to user model' do
    context 'belongs to users' do
      it { should belong_to(:user) }
    end
  end

  describe 'Validate presence of winner info' do
    it 'Is invalid if winner is nil' do
      existing_user = create(:user)
      record = build(:record, user_id: existing_user.id, winner: '')
      expect(record).not_to be_valid
    end

    it 'Is valid if winner is not nil' do
      existing_user = create(:user)
      record = build(:record, user_id: existing_user.id, winner: 'john@yahoo.com', opponent: 'random')
      expect(record).to be_valid
    end
  end
end
