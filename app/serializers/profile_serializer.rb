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
             :classes

  #has_many :klasses,  embed_in_root: true, serializer: KlassSerializer
  has_many :trainers, embed_in_root: true, serializer: TrainerSerializer
  has_many :members,  embed_in_root: true, serializer: MemberSerializer
  has_many :plans,    embed_in_root: true, serializer: PlanSerializer


  def classes
    return nil unless object.klasses
    object.klasses.select { |k| k.is_parent == true }
  end

end
