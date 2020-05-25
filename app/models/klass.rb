class Klass < ActiveRecord::Base
  belongs_to :profile
  has_many :klass_schedules
end
