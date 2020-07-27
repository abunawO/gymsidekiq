class Plan < ActiveRecord::Base
  belongs_to :profile
  has_and_belongs_to_many :klasses
  has_many   :members
end
