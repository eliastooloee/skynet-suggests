class Repo < ApplicationRecord
  belongs_to :user
  has_many :suggestions
end