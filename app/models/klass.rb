class Klass < ActiveRecord::Base
  belongs_to :profile
  has_many   :attendances
  has_many :members, through: :attendances


  def trainers
    trainers_and_class = []

    return trainers_and_class
  end
end
