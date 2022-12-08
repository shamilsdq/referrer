# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    devise_for :users
  end

  root "home#index"
  get "*path", to: "home#index", via: :all
end
