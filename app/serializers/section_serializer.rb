class SectionSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :profile_id,
             :user_id,
             :profile_name,
             :members_list

  def profile_name
    #binding.pry
    object.user.profile.profile_name
  end

  def members_list
    members = []
    profile_members = Member.where(:user_id => object.user.id)
    profile_members.each do |member|
      member.get_membership_type
      members << member if  member.section_ids.split(',').map!(&:to_i).include?(id)
    end
    return members
  end
end
