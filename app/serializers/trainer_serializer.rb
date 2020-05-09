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
              :classes

  def classes
    return nil unless object.klasses
    object.klasses
  end

  #has_many :klasses,  embed_in_root: true, serializer: KlassSerializer
end
