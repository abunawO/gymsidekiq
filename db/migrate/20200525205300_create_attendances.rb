class CreateAttendances < ActiveRecord::Migration[5.0]
  def change
    create_table :attendances do |t|
      t.belongs_to :profile
      t.belongs_to :klass
      t.belongs_to :member
      t.datetime :check_in_date

      t.timestamps
    end
  end
end
