class Klass < ActiveRecord::Base
  belongs_to :profile

  def trainers
    trainers_and_class = []
    Trainer.where(profile_id: self.profile_id).each do |trainer|
      klass_ids = trainer.klass_ids.split(',').map(&:to_i)
      if klass_ids.include?(self.id)
        trainers_and_class << trainer
      end
    end
    return trainers_and_class
  end

  def members
    members_and_class = []
    Member.where(profile_id: self.profile_id).each do |member|
      plan = Plan.where(id: member.plan_id).first
      if plan.klass_ids.split(',').map(&:to_i).include?(self.id)
        members_and_class << member
      end
    end
    return members_and_class
  end
end
