class ProfileSerializer < ActiveModel::Serializer
  attributes :id,
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
    #binding.pry
    object.members
  end

  def sections_list
    #object.sections
    []
  end
end
