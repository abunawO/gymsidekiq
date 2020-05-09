class KlassSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :schedule,
             :profile_id,
             :is_parent,
             :trainers,
             :members


   def trainers
     trainers_and_class = []
     Trainer.where(profile_id: 1).each do |trainer|
       trainer.klasses.map(&:title).uniq.each do |title|
         if title.eql?(object.title)
            trainers_and_class << trainer
         end
       end
     end
     return trainers_and_class
   end

   def members
     members_and_class = []
     Member.where(profile_id: 1).each do |member|
       member.klasses.map(&:title).uniq.each do |title|
         if title.eql?(object.title)
           members_and_class << member
         end
       end
     end
     return members_and_class
   end
end
