class PlanSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :classes
end
