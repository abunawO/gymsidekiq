class Attendance < ActiveRecord::Base
  belongs_to :profile
  belongs_to :klass
  belongs_to :member
end
