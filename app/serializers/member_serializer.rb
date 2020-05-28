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
             :classes,
             :image,
             :monthly_price,
             :contract_length,
             :contract_expiration

 has_many :attendances

 def contract_expiration
   object.created_at + object.contract_length.month 
 end

 def membership_type
   return unless object.plan_id
   Plan.find(object.plan_id).title
 end

 def monthly_price
   return unless object.plan_id
   Plan.find(object.plan_id).price
 end

 def classes
   return nil unless object.plan_id
   plan = Plan.find(object.plan_id)
   Klass.where(id: plan.klass_ids.split(','))
 end

 def trainers
   []
 end
end
