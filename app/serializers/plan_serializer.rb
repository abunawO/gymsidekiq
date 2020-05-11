class PlanSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :klass_ids,
             :classes

  def classes
    return unless object.klass_ids.present?
    Klass.where(id: object.klass_ids.split(','))
  end
end
