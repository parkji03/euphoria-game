Rails.application.routes.draw do

  get '/game', to: 'game#index'

  root to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
