Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :sessions, only: [:create, :destroy]
    resources :photos, only: [:index]
    resources :favorites, only: [:show, :create, :destroy]
  end
end
