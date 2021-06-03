# frozen_string_literal: true

Rails.application.routes.draw do
  get '/users', to: 'users#index'
  post '/users', to: 'users#create'
  post '/users/login', to: 'users#login'

  get '/records', to: 'records#index'
  post '/records', to: 'records#create'

  root 'homepage#index'
  get '*path', to: 'homepage#index'
  mount ActionCable.server => '/cable'
end
