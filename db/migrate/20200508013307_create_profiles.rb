class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.belongs_to :user, index: { unique: true }, foreign_key: true
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
