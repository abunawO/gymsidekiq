class TrainerSerializer < ActiveModel::Serializer
  attributes  :id,
              :first_name,
              :last_name,
              :email,
              :profile_id,
              :address,
              :state,
              :city,
              :zip,
              :phone,
              :profile_id,
              :image,
              :klasses


 #has_many :klasses, embed_in_root: true, serializer: KlassSerializer


  def klasses
    object.klasses
  end
end
