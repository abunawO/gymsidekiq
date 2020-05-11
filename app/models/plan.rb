class Plan < ActiveRecord::Base
  belongs_to :profile

  def classes
    return unless self.klass_ids.present?
    Klass.where(id: self.klass_ids.split(','))
  end
end
