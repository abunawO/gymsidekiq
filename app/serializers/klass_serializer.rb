class KlassSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :schedule,
             :profile_id,
             :trainers,
             :members

 has_many :attendances
 has_many :members

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
     if member.plan_id
       klass_ids = Plan.where(id: member.plan_id).first.klass_ids.split(',').map(&:to_i)
       if klass_ids.include?(object.id)
         members_and_class << member
       end
     end
   end
   return members_and_class
 end
end
