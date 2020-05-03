class ProfileSerializer < ActiveModel::Serializer
  attributes :id,
             :user_id,
             :profile_name,
             :email,
             :address,
             :city,
             :state,
             :zip,
             :phone,
             :members_list,
             :sections_list

  has_many :members,  embed_in_root: true, serializer: MemberSerializer
  has_many :sections, embed_in_root: true, serializer: SectionSerializer

  def members_list
    members = []
    profile_members = Member.where(:user_id => object.user.id)
    profile_members.each do |member|
      member.get_membership_type
      members << member if  member.section_ids.split(',').map!(&:to_i).include?(id)
    end
    return members
  end

  def sections_list
    Section.where(:user_id => object.user_id)
  end
end
