Rails.application.routes.draw do
  namespace :api, defaults: { format: JSON } do
    resources :user, only: [:create]
    resources :posts
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
