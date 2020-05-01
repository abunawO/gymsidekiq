class SectionSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :profile_id,
             :profile_name,
             :members_list

  def profile_name
    object.profile.profile_name
  end

  def members_list
    #binding.pry
    members = []
    profile_members = Member.where(:profile_id => object.profile_id)
    profile_members.each do |member|
      members << member if  member.section_ids.split(',').map!(&:to_i).include?(id)
    end
    return members
  end
end
