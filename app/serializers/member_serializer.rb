class MemberSerializer < ActiveModel::Serializer
  attributes :id,
             :membership_type,
             :first_name,
             :last_name,
             :email,
             :profile_id,
             :address,
             :city,
             :state,
             :zip,
             :phone,
             :membership_type,
             :profile_id,
             :trainers

  has_many :klasses,  embed_in_root: true, serializer: KlassSerializer

  def membership_type
    return nil unless object.klasses
    object.klasses.map(&:title).uniq
  end

  def trainers
    trainers_and_class = {}
    Trainer.where(profile_id: 1).each do |trainer|
      trainers_list = []
      trainer.klasses.map(&:title).uniq.each do |title|
        if object.klasses.map(&:title).uniq.include?(title)
          if trainers_and_class.key?("#{title}")
            trainers_and_class["#{title}"] << trainer
          else
            trainers_and_class["#{title}"] = [trainer]
          end
        end
      end
    end
    return trainers_and_class
  end

end
