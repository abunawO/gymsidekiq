class KlassSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :profile_id,
             :plan_ids,
             :schedule

 has_many  :attendances, embed_in_root: true, serializer: AttendanceSerializer
 has_many  :trainers,    embed_in_root: true, serializer: TrainerSerializer
 has_many  :members,    embed_in_root: true, serializer: MemberSerializer

  def schedule
    return unless object.schedule
    JSON.parse(object.schedule)
  end

end
