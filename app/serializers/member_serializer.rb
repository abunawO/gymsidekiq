class MemberSerializer < ActiveModel::Serializer
  attributes :id,
             :membership_type,
             :first_name,
             :last_name,
             :email,
             :address,
             :city,
             :state,
             :zip,
             :phone,
             :profile_id,
             :plan_id,
             :image,
             :monthly_price,
             :contract_length,
             :contract_expiration,
             :klasses

has_many  :attendances, embed_in_root: true, serializer: AttendanceSerializer

 def contract_expiration
   object.created_at + object.contract_length.months
 end

 def membership_type
   return unless object.plan.present?
   object.plan.title
 end

 def monthly_price
   return unless object.plan.present?
   object.plan.price
 end

 def klasses
   return unless object.plan.present?
   object.plan.klasses
 end

 def trainers
   []
 end
end
