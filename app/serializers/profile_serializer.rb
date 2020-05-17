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
             :image


  has_many :trainers, embed_in_root: true, serializer: TrainerSerializer
  has_many :members,  embed_in_root: true, serializer: MemberSerializer
  has_many :plans,    embed_in_root: true, serializer: PlanSerializer
  has_many :klasses,  embed_in_root: true, serializer: KlassSerializer

end
