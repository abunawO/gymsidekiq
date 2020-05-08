class Klass < ActiveRecord::Base
  belongs_to :profile
  belongs_to :trainer
  belongs_to :member
end
