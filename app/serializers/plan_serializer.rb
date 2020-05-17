class PlanSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :profile_id,
             :klass_ids,
             :classes,
             :price
end
