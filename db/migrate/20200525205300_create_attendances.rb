class CreateAttendances < ActiveRecord::Migration[5.0]
  def change
    create_table :attendances do |t|
      t.integer :profile_id
      t.integer :member_id
      t.integer :klass_id

      t.timestamps
    end
  end
end
