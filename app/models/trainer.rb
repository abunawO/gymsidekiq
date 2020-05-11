class Trainer < ActiveRecord::Base
  belongs_to :profile

  def classes
    return nil unless self.klass_ids
    Klass.where(id: self.klass_ids.split(','))
  end
end
