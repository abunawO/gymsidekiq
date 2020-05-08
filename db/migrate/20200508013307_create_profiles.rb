class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :profile_name
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
