class Member < ActiveRecord::Base
  belongs_to :profile
  mount_uploader :image, ImageUploader


  def membership_type
    return unless self.plan_id
    Plan.find(self.plan_id).title
  end

  def classes
    return nil unless self.plan_id
    plan = Plan.find(self.plan_id)
    Klass.where(id: plan.klass_ids.split(','))
  end

  def trainers
    []
  end
end
