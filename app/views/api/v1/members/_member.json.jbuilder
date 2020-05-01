json.extract! member, :id, :membership_type, :first_name, :last_name, :email, :profile_id, :address, :city, :state, :zip, :phone, :section_ids, :created_at, :updated_at
json.url member_url(member, format: :json)
