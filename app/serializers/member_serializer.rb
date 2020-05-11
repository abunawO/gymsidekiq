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
             :plan_id,
             :trainers,
             :classes

  #has_many :klasses,  embed_in_root: true, serializer: KlassSerializer

  def membership_type
    return unless object.plan_id
    Plan.find(object.plan_id).title
  end

  def classes
    return nil unless object.plan_id
    plan = Plan.find(object.plan_id)
    Klass.where(id: plan.klass_ids.split(','))
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
