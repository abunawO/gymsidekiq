class PlanSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :profile_id,
             :klass_ids,
             :classes,
             :price


 def classes
   return unless object.klass_ids.present?
   Klass.where(id: object.klass_ids.split(','))
 end
end
