class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.integer :profile_id, :default => nil, :null => true
      t.string :password_hash
      t.string :password_salt

      t.timestamps null: false
    end
  end
end
