class AddCheckedInAtToAttendances < ActiveRecord::Migration[5.0]
  def change
    add_column :attendances, :checked_in_at, :string
  end
end
