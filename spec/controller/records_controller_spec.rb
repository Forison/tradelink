# frozen_string_literal: true

require 'rails_helper'

RSpec.describe RecordsController, type: :controller do

  describe "GET #index" do
    it "should fail without authorization headers" do
      get :index
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe "POST #create" do
    it "should fail without authorization headers" do
      post :create, :params => { :record => {:user_id => 1, :winner => "yaQa@yahoo.com", :opponent => "me@yaoo.com"} }
      expect(response).to have_http_status(:unauthorized)
    end
  end
end