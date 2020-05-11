class AddProfileIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :profile_id, :string
    add_column :users, :integer, :string
  end
end
