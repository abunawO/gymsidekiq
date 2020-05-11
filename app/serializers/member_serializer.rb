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

end
