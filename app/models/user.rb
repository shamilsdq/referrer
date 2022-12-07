# frozen_string_literal: true

class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable

  def generate_auth_token
    JWT.encode(
      { id: id, exp: 10.days.from_now.to_i },
      Rails.application.secrets.secret_key_base)
  end
end
