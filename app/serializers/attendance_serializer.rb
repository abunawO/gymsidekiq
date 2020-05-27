class AttendanceSerializer < ActiveModel::Serializer
  attributes :id,
             :profile_id,
             :member_id,
             :klass_id,
             :checked_in_at


  def checked_in_at
    object.created_at.in_time_zone('Eastern Time (US & Canada)')
  end
end
