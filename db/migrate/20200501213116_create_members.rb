class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
      t.string :membership_type
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :profile_id
      t.integer :user_id
      t.string :address
      t.string :city
      t.string :state
      t.string :zip
      t.string :phone
      t.text :section_ids
      t.belongs_to :profile
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
