class KlassSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :schedule,
             :profile_id,
             :trainers,
             :members

 def trainers
   trainers_and_class = []
   Trainer.where(profile_id: object.profile_id).each do |trainer|
     klass_ids = trainer.klass_ids.split(',').map(&:to_i)
     if klass_ids.include?(object.id)
       trainers_and_class << trainer
     end
   end
   return trainers_and_class
 end

 def members
   members_and_class = []
   Member.where(profile_id: object.profile_id).each do |member|
     plan = Plan.where(id: member.plan_id).first
     if plan.klass_ids.split(',').map(&:to_i).include?(object.id)
       members_and_class << member
     end
   end
   return members_and_class
 end
end
