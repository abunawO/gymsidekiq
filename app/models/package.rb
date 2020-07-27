class Package < ApplicationRecord
  belongs_to :plan
  belongs_to :klass
end
