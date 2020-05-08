class AddProfileToMembers < ActiveRecord::Migration
  def change
    add_reference :members, :profile, index: true, foreign_key: true
  end
end
