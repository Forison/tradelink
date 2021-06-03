# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do # rubocop:disable Metrics/BlockLength
  describe 'Create User' do
    it 'create new user' do
      new_user = create(:user)
      expect(new_user).to be_valid
    end
  end

  describe 'Test User model validation' do
    context 'on attempt to create user without email should fail' do
      it 'Is invalid if email is nil' do
        nil_email = build(:user, email: '')
        expect(nil_email).not_to be_valid
      end
    end
    context 'Allow the creation of user with email params existing' do
      it 'Is invalid if email is nil' do
        user = build(:user, email: 'jack@yahoo.com')
        expect(user).to be_valid
      end
    end

    context 'on attempt to create user without username should fail' do
      it 'Is invalid if email is nil' do
        nil_email = build(:user, username: '')
        expect(nil_email).not_to be_valid
      end
    end
    context 'Allow the creation of user with username params existing' do
      it 'Is invalid if email is nil' do
        user = build(:user, username: 'john')
        expect(user).to be_valid
      end
    end
  end

  describe 'Uniq email address' do
    it 'Is invalid if email is nil' do
      existing_user = create(:user)
      user = build(:user, email: existing_user.email)
      expect(user).not_to be_valid
    end
  end

  describe 'associations of user to record model' do
    context 'has_many records' do
      it { should have_many(:records) }
    end
  end
end
