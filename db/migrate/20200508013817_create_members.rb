class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
      t.belongs_to :profile
      t.belongs_to :plan
      t.integer :profile_id
      t.integer :plan_id
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :address
      t.string :state
      t.string :city
      t.string :zip

      t.timestamps null: false
    end
  end
end
