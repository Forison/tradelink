# frozen_string_literal: true

require 'rails_helper'

RSpec.describe UsersController, type: :controller do # rubocop:disable Metrics/BlockLength
  before do
    @user = create(:user)
  end

  describe 'GET #index' do
    it 'returns unauthorized because of lack of headers' do
      get :index
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe 'POST #create' do
    context 'submission with all params' do
      it 'returns http success' do
        post :create, params: { user: { username: 'username', email: 'yaQa@yahoo.com' } }
        expect(response).to have_http_status(:ok)
      end
    end
    context 'submit without params' do
      it 'returns http success' do
        post :create, params: { user: { username: 'username', email: '' } }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'GET #login' do
    context 'Return wron answer for missing input field' do
      it 'returns http success' do
        post :login, params: { user: { username: @user.username, email: @user.email } }
        expect(response).to have_http_status(:ok)
      end
    end
    context 'Return wron answer for missing input field' do
      it 'returns http success' do
        post :login, params: { user: { email: '' } }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end
