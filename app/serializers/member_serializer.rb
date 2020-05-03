class MemberSerializer < ActiveModel::Serializer
  attributes :id,
             :membership_type,
             :first_name,
             :last_name,
             :email,
             :profile_id,
             :user_id,
             :parent_profile_name,
             :address,
             :city,
             :state,
             :zip,
             :phone,
             :section_ids,
             :membership_type,
             :registered_sections

  def parent_profile_name
    object.user.profile.profile_name
  end

  def membership_type
    registered_sections.map(&:title) if registered_sections
  end

  def registered_sections
    return unless object.section_ids
    user_id = object.user_id
    section_ids = object.section_ids.split(",")
    sections = Section.where(:user_id => user_id, :id => section_ids)
    return sections
  end
end
