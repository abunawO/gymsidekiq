class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
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
